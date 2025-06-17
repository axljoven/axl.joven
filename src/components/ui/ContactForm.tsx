import Clear from "./../../assets/icons/form/Clear.tsx"
import Send from "./../../assets/icons/form/Send.tsx";

export default function ContactForm() {
    return (
        <form class="flex flex-col">
            <div class="flex flex-col gap-8 px-16 py-14">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold uppercase">Name</label>
                    <input 
                        id="name"
                        type="text" 
                        placeholder="Name" 
                        className="px-6 py-4 border border-accent rounded-sm shadow-lg outline-none focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold uppercase">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email" 
                        className="px-6 py-4 border border-accent rounded-sm shadow-lg outline-none focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold uppercase">Message</label>
                    <textarea 
                        id="message"
                        placeholder="Say Hi!" 
                        className="px-6 py-4 border border-accent rounded-sm min-h-[200px] shadow-lg outline-none focus:outline-none focus:ring-2 focus:ring-accent"
                    ></textarea>
                </div>
            </div>
            <div class="grid grid-cols-2 mt-auto text-lg font-semibold">
                <button className="uppercase flex items-center justify-center gap-4 p-6 border-t border-accent hover:cursor-pointer hover:bg-accent-fade">
                    Reset <Clear />
                </button>
                <button type="submit" className="uppercase flex items-center justify-center gap-4 p-6 bg-accent !text-white hover:cursor-pointer">
                    Send <Send color="light" />
                </button>
            </div>
        </form>
    );
}