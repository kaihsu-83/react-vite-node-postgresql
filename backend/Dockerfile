# 使用官方 Node.js 映像檔作為基礎映像檔
FROM node:20

# 設定工作目錄在容器中為 /app
WORKDIR /app

# 將 package.json 和 package-lock.json 複製到工作目錄
COPY package*.json ./

# 安裝所有依賴，包含開發工具和 PostgreSQL 客戶端
RUN npm install 
    # && \
    # npm install express && \
    # npm install --save-dev nodemon && \
    # npm install pg && \
    # npm install cors

# 將專案的其餘檔案複製到工作目錄
COPY . .

# 暴露應用程式將監聽的端口 (這裡假設是 3000)
EXPOSE 3000

# 定義容器啟動時執行的指令，使用 npm run dev
CMD [ "npm", "run", "dev" ]