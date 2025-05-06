# 使用 Node.js 官方映像
FROM node:20

# 設定工作目錄
WORKDIR /app

# 將 package.json 和 package-lock.json 複製到工作目錄
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製其他程式碼
COPY . .

# 對外暴露 Vite 的開發伺服器埠
EXPOSE 5173

# 啟動 Vite 開發伺服器
CMD ["npm", "run", "dev", "--", "--host"]
