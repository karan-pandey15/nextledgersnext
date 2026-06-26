import React from "react";

export default function NavIcon({ name, className = "w-5 h-5" }) {
  switch (name) {
    case "home":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      );
    case "info":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      );
    case "flag-usa":
    case "flag-canada":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <line x1="4" y1="22" x2="4" y2="2" />
          <path d="M4 4c3-1.5 5.5 .5 8.5 0s5.5-1.5 8.5 0v8.5c-3-1.5-5.5 .5-8.5 0s-5.5-1.5-8.5 0z" />
        </svg>
      );
    case "mail":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    case "building":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zm-6 12H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      );
    case "charity":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "book":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" />
        </svg>
      );
    case "book-open":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 3.1c-1.1-.3-2.3-.4-3.5-.4-1.9 0-3.8.4-5.5 1.3-1.7-.9-3.6-1.3-5.5-1.3-1.2 0-2.4.1-3.5.4-.5.1-.9.6-.9 1.2V19c0 .6.4 1 1 1 .2 0 .3 0 .5-.1 1-.3 2.1-.4 3.1-.4 1.9 0 3.8.4 5.5 1.3 1.6-.9 3.5-1.3 5.4-1.3 1.1 0 2.2.1 3.2.4.2.1.4.1.6.1.5 0 .9-.4.9-1V4.3c0-.6-.4-1.1-.9-1.2zM11 18.5c-1.6-.8-3.4-1.2-5.3-1.2-.9 0-1.8.1-2.7.3V5.4c.9-.2 1.8-.3 2.7-.3 1.6 0 3.3.4 4.8 1.1v12.3zm10-1.2c-.9-.2-1.8-.3-2.7-.3-1.9 0-3.7.4-5.3 1.2V6.2c1.5-.7 3.2-1.1 4.8-1.1.9 0 1.8.1 2.7.3v12.1z" />
        </svg>
      );
    case "tax":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      );
    case "card":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "document":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.19 0-2.24.6-2.87 1.5H7.42c.77-1.76 2.53-3 4.58-3 2.76 0 5 2.24 5 5s-2.24 5-5 5z" />
        </svg>
      );
    case "search":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case "pie-chart":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0c5.07.5 9 4.79 9 10s-3.93 9.5-9 10V2z" />
        </svg>
      );
    case "calculator":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2.4 14H15v-1.6h1.6V17zm0-3H15v-1.6h1.6V14zm0-3H15V9.4h1.6V11zm-3 6h-1.6v-1.6h1.6V17zm0-3h-1.6v-1.6h1.6V14zm0-3h-1.6V9.4h1.6V11zm-3 6H9v-1.6h1.6V17zm0-3H9v-1.6h1.6V14zm0-3H9V9.4h1.6V11zM17 7H7V5h10v2z" />
        </svg>
      );
    default:
      return null;
  }
}
