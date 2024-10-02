// controllers/commentsController.js
const Comment = require("../models/CommentModel");
const Enrollment = require("../models/EnrollmentModel");

// Add a new comment
const addComment = async (req, res) => {
  const { userId, enrollmentId, courseId, content } = req.body;

  if (!userId || !enrollmentId || !courseId || !content) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newComment = new Comment({ userId, enrollmentId, courseId, content });
    const savedComment = await newComment.save();
    res
      .status(201)
      .json({ message: "Comment added successfully.", comment: savedComment });
    // Update the enrollment
    await Enrollment.findByIdAndUpdate(
      enrollmentId,
      {
        isParticipated: true,
      },
      { new: true }
    );
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Get all comments for a specific course
const getComments = async (req, res) => {
  const { courseId } = req.params;

  try {
    const comments = await Comment.find({ courseId }).populate(
      "userId",
      "username"
    ); // Populate user info
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Update a comment by ID
const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { content },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found." });
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    console.error("Error updating comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Delete a comment by ID
const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found." });
    }

    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = {
  addComment,
  getComments,
  updateComment,
  deleteComment,
};
