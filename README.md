# IP Address Tracker

An IP Address Tracker application built with React, TypeScript, and Vite. This application allows users to search for any IP address or domain and see the key details and location on an interactive map.

## Features

- **IP Address Lookup**: Search for any IP address to retrieve its location, timezone, and ISP.
- **Automatic Detection**: Automatically detects and displays information for your current IP address on load.
- **Interactive Map**: Visualizes the location on a Google Map.
- **Responsive Design**: Optimized for different screen sizes.

## Technologies Used

- [React](https://react.dev/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Static Type Checker
- [Vite](https://vitejs.dev/) - Build Tool
- [Google Maps API](https://developers.google.com/maps) - Maps integration via `@vis.gl/react-google-maps`
- [IPify API](https://geo.ipify.org/) - Geolocation API
- [IPStack API](https://ipstack.com/) - IP Geolocation
- [IPinfo API](https://ipinfo.io/) - IP details

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ip_tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   VITE_IPIFY_API_KEY=your_ipify_api_key
   VITE_IPINFO_API_KEY=your_ipinfo_api_key
   VITE_IP_STACK_API_KEY=your_ip_stack_api_key
   ```

## Usage

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Build

To build the application for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Linting

To lint the code:

```bash
npm run lint
```
