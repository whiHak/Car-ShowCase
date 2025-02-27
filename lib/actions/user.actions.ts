"use server";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { CreateuserPrams } from "@/types";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database";
import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

const populateUser = (query: any) => {
  return query.populate({
    path: "edirId",
    model: User,
    select: "_id title location imageUrl price",
  });
};

export const createuser = async (user: CreateuserPrams) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);

    if (user.clerkId) {
      // Update Clerk metadata right after user creation
      try {
        const client = await clerkClient();
        await client.users.updateUserMetadata(user.clerkId, {
          publicMetadata: {
            userId: newUser._id.toString(),
          },
        });
      } catch (error) {
        console.error("Failed to update Clerk metadata:", error);
        await User.findByIdAndDelete(newUser._id);
        throw new Error("Failed to update Clerk metadata");
      }
    }

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("User creation error:", error);
    throw error; // Re-throw to handle it in the calling function
  }
};

export const getUserId = async () => {
  const { sessionClaims } = await auth();
  if (!sessionClaims) {
    throw new Error("Unauthorized");
  }
  const userId = sessionClaims.userId as string;
  return userId;
};

// export const getUserById = async(userId: string) => {
//   try {
//     await connectToDatabase();

//     const user = await User.findById(userId);

//     if (!user) throw new Error("User not found");
//     return JSON.parse(JSON.stringify(user));
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const addMemberToEdir = async ({
//   username,
//   edir,
//   path,
// }: AddMemberToEdirParams) => {
//   try {
//     await connectToDatabase();

//     const newMember = await User.findOne({ username: username });
//     if (!newMember) {
//       return"User Not Found!!!";
//     }

//     if (!newMember.edirId || newMember.edirId !== edir._id.toString()) {
//       const updatedUser = await User.findByIdAndUpdate(
//         newMember._id,
//         { edirId: new ObjectId(edir._id) },
//         { new: true, runValidators: true, strict: false }
//       );

//       if (!updatedUser) {
//         return "Failed to update user with new edir ID.";
//       }

//       console.log(updatedUser);
//       revalidatePath(path);
//       return "User added successfully";
//     } else {
//       return "User already a member of this edir.";
//     }
//   } catch (error) {
//     console.error("Error adding member to edir:", error);
//     return "Error adding member to edir";

//   }
// };

// export const updateUser = async(clerkId: string, user: UpdateUserParams) => {
//   try {
//     await connectToDatabase();

//     const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
//       new: true,
//     });

//     if (!updatedUser) throw new Error("User update failed");
//     return JSON.parse(JSON.stringify(updatedUser));
//   } catch (error) {
//     console.log(error);
//   }
// }

// export const deleteUser = async(clerkId: string) => {
//   try {
//     await connectToDatabase();

//     // Find user to delete
//     const userToDelete = await User.findOne({ clerkId });

//     if (!userToDelete) {
//       throw new Error("User not found");
//     }

//     // Delete user
//     const deletedUser = await User.findByIdAndDelete(userToDelete._id);
//     revalidatePath("/");

//     return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
//   } catch (error) {
//     console.log(error);
//   }
// }
