# 🪙 Crypto Live API Tracker

Real-time cryptocurrency tracker using WebSocket data for lightning-fast updates on Bitcoin and other top coins.



---

## 🚀 Live Demo

🔗 check out [Live Demo](https://crypto-map.netlify.app/)   
   

---

## 🛠 Tech Stack

- **React + Vite** – Frontend framework
- **WebSockets (Binance API)** – Real-time data source
- **CSS** – Custom styles (no libraries)
- **Charting** – Sparklines for 7-day performance
- **Git + GitHub** – Version control and hosting

---

## 🧱 Architecture Overview

- `src/api.js` – WebSocket API setup for real-time crypto prices
- `src/App.jsx` – Main app component displaying coin data
- `src/selectors.js` – Utility functions for filtering/sorting data
- `public/` – Static assets
- `vite.config.js` – Vite configuration

---

## 🧰 Setup Instructions

1. **Clone the Repo**
   ```bash
   git clone https://github.com/jeeva-pro/Crypto-live-api.git
   cd Crypto-live-api


## Screenshorts
![1](https://github.com/user-attachments/assets/06601fc5-ddef-45da-88d8-197bee437233)
![2](https://github.com/user-attachments/assets/bea0d2b6-f176-4eb1-85d4-c4f9176145d0)
![3](https://github.com/user-attachments/assets/5f02a9d2-59b0-495b-a0e6-d63c5935e910)


2. **API Key**:  
You can generate an API key for your personal use in Binance's Developer Portal. For this project, no API key is required for public market data streams.

3. **Request Format**:
The WebSocket listens to data streams in JSON format like:

{
  "e": "trade",
  "E": 1617123456789,
  "s": "BTCUSDT",
  "t": 1234567890,
  "p": "45000.00",
  "q": "0.001",
  "b": "12345",
  "a": "67890"
}

---





## License

MIT License © 2025 jeeva-pro


---

### ✅ To Finish:
- Upload your own **GIF** or **screen recording** and replace the demo link.
- Optionally deploy to **Netlify**, **Vercel**, or GitHub Pages, and update the "Live Demo" section.




