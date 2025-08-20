
import { getSessionUser } from "../../lib/auth";

export default async function Footer() {
	const user = await getSessionUser();
	if (!user) return null;

	return (
		<footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#6D8F7A] via-[#227468] to-[#445954] text-[#F9E879] py-3 shadow-inner" style={{fontFamily: 'Montserrat, sans-serif'}}>
			   <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
				   <div className="text-center md:text-left">
					   <h3 className="text-xl font-bold mb-2 text-[#F9E879]">ReiseBlog</h3>
					   <p className="mb-2 text-[#BDAC73]">Dein digitaler Begleiter für Abenteuer, Natur und goldene Momente.</p>
					   <p className="text-sm text-[#77B5A8]">© {new Date().getFullYear()} ReiseBlog. Alle Rechte vorbehalten.</p>
				   </div>
				   <div className="flex flex-col items-center md:items-end gap-2">
			   <span className="font-semibold text-[#BDAC73]">Kontakt:</span>
			   <a href="mailto:info@reiseblog.com" className="hover:text-[#77B5A8] transition text-[#F9E879]">info@reiseblog.com</a>
			   <div className="flex gap-4 mt-2">
				   <a href="#" aria-label="Instagram" className="hover:text-[#77B5A8] transition text-[#F9E879]">
							   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
						   </a>
						   <a href="#" aria-label="Facebook" className="hover:text-[#77B5A8] transition text-[#F9E879]">
							   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z"/></svg>
						   </a>
						   <a href="#" aria-label="Twitter" className="hover:text-[#77B5A8] transition text-[#F9E879]">
							   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.9c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.59-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.49 3.85 3.47 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 24 4.59a8.6 8.6 0 0 1-2.54.7z"/></svg>
						   </a>
					   </div>
				   </div>
			   </div>
		   </footer>
	);
}
