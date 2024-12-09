import { useState } from 'react';

export default function ComplaintForm() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Complaint submitted successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('Failed to submit complaint.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred.');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-bold">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>
                <div>
                    <label className="block font-bold">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>
                <div>
                    <label className="block font-bold">Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>
                <div>
                    <label className="block font-bold">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Submit Complaint
                </button>
            </form>
            {status && <p className="mt-4">{status}</p>}
        </div>
    );
}
