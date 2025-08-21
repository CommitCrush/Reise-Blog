import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { cookies } from "next/headers";

// Hole den aktuellen Benutzer aus der Session
export async function getSessionUser() {
    // Check if database is configured
    if (!process.env.MONGODB_URL) {
        console.warn('Database not configured - returning null for session user');
        return null;
    }

    try {
        const cookieStore = await cookies();
        const sessionToken = cookieStore.get("sessionToken");

        // Wenn kein Session-Token vorhanden ist, gebe null zurück
        if (!sessionToken) return null;

        // Verbindung zur Datenbank herstellen
        await connectDB();
        const user = await User.findById(sessionToken?.value).lean();

        // Wenn kein Benutzer gefunden wurde, gebe null zurück
        if (!user) return null;
        return user || null;
    } catch (error) {
        console.error('Error getting session user:', error);
        return null;
    }
}
