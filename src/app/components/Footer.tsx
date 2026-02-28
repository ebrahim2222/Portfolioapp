import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-slate-400">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
            Ebrahim Elbitawy
          </p>
          <p className="text-slate-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
