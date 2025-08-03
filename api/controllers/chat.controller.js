// api/controllers/chat.controller.js
import prisma from "../lib/prisma.js";

// ... (getChats, getChat, addChat functions remain the same) ...

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.update({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      data: {
        seenBy: {
          push: tokenUserId, // Use push to add the user to the seenBy array
        },
      },
    });
    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to read chat!" });
  }
};

// Make sure your addChat function looks like this to prevent creating duplicate chats
export const addChat = async (req, res) => {
  const tokenUserId = req.userId;
  const receiverId = req.body.receiverId;

  try {
    // Check if a chat already exists between these two users
    const existingChat = await prisma.chat.findFirst({
      where: {
        userIDs: {
          hasEvery: [tokenUserId, receiverId],
        },
      },
    });

    if (existingChat) {
      // If chat exists, just return it
      return res.status(200).json(existingChat);
    }

    // If no chat exists, create a new one
    const newChat = await prisma.chat.create({
      data: {
        userIDs: [tokenUserId, receiverId],
      },
    });
    res.status(200).json(newChat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add chat!" });
  }
};

