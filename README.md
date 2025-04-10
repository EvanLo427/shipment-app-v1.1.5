# 🚚 出貨裝箱小程式 v1.1.5

這是一個用 React 製作的出貨裝箱管理工具，提供基本資料輸入、逐箱品項紀錄、總計與出貨單樣式預覽功能。適合製造業或物流業用來簡易管理裝箱明細與出貨流程。

## 🖥️ 功能特色

- 📋 **基本資料輸入**：公司名稱、批號、經手人、出貨與回廠時間
- ✏️ **逐箱輸入**：每一箱的品項、數量、尺寸、顏色與備註
- 📦 **統計分析**：自動統整每種品項與名稱的數量，計算總箱數
- 🖨️ **列印樣式**：提供「外箱貼」與「出貨單樣式」的列印版面
- 🧠 **即時更新時間**：系統自動更新當前時間，方便記錄與追蹤

## 🔧 安裝與啟動

```bash
npm install
npm run dev
```

啟動後請打開瀏覽器前往 `http://localhost:5173`

## 📦 專案結構

```
shipment-app-v1/
├─ src/
│  └─ App.jsx        # 主程式碼
├─ index.html        # 靜態 HTML 框架
├─ package.json      # 專案設定與依賴
├─ vite.config.js    # Vite 設定檔
└─ README.md         # 本說明文件
```

## 🧑‍💻 開發技術

- React 18
- Vite 快速開發環境
- TailwindCSS + ShadCN UI（請自行擴充組件）

## 📝 備註

此版本為 v1.1.5，尚未連接資料庫。若需儲存資料，請自行串接後端或使用 LocalStorage/IndexedDB 等機制。

---

Made with ❤️ by RUTH RD.
