# 學生會根網址品牌首頁

此儲存庫提供 https://tlshstudent-max.github.io/ 的官方入口，讓搜尋引擎從根網址讀取學生會名稱、正式會標與介紹。

1. Settings → Pages → Deploy from a branch → main → / (root) → Save。若已設定相同來源，不需重複儲存。
2. 等部署完成後，確認 https://tlshstudent-max.github.io/ 能看到會標與官方介紹，https://tlshstudent-max.github.io/favicon.png 能開啟圖片。
3. Google Search Console 新增或選擇「網址前置字元」資源 https://tlshstudent-max.github.io/，完成擁有權驗證後提交 https://tlshstudent-max.github.io/sitemap.xml，並對根網址和原官網首頁使用「網址審查 → 請求建立索引」。

原官網、幹部登入與 OAuth 回呼仍使用原網址，不需改動 Supabase 或 Google 登入設定。

根頁已保留原官網公開的 Search Console 驗證標記；若 Console 要求不同標記，請依該資源提供的新標記更新 index.html。標記存在不等於已完成擁有權驗證。

這些訊號讓 Google 能在主機根層級讀到網站名稱及 favicon，但 Google 仍自行決定顯示內容及抓取時間。這不是立即更新、指定排名或保證縮圖的服務。
