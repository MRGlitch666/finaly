export default function handler(req, res) {
    if (req.method === 'POST') {
        const { title, content, status } = req.body;

        // Here, you can implement logic to save content to a database or other systems.
        console.log('Received post content:', content);

        // Respond back with success message
        res.status(201).json({ message: 'Post created successfully' });
    } else {
        // If the method is not POST, respond with error
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
