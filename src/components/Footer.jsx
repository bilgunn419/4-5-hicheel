import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 py-8 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Brooklyn Gilbert. All rights reserved.
    </footer>
  );
}
