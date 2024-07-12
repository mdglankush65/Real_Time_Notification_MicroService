const Notice = require('../models/notification');

async function createNotification(req, res) {
    try {
        const { userId, message, read } = req.body;

        const newNotification = new Notice({
            userId,
            message,
            read
        });

        await newNotification.save();

        res.status(200).json({ message: "Notification created successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

async function fetchAllNotification(req, res) {
    try {
        const notifications = await Notice.find();

        res.status(200).json({ message: "Notifications fetched successfully.", notifications });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

async function fetchNotification(req, res) {
    try {
        const { id } = req.params;

        const notification = await Notice.findById(id);

        if (!notification) {
            return res.status(404).json({ message: "Notification not found." });
        }

        res.status(200).json({ message: "Notification fetched successfully.", notification });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

async function updateNotification(req, res) {
    try {
        
        const { id } = req.params;
        
        const { userId, message, read } = req.body;

        const notification = await Notice.findByIdAndUpdate(id, { userId, message, read }, { new: true });

        if (!notification) {
            return res.status(404).json({ message: "Notification not found." });
        }

        res.status(200).json({ message: "Notification updated successfully.", notification });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

module.exports = { createNotification, fetchAllNotification, fetchNotification, updateNotification };