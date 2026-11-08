# 學生會根網址品牌首頁

此儲存庫提供 https://tlshstudent-max.github.io/ 的官方入口，讓搜尋引擎從根網址讀取學生會名稱、正式會標與介紹。

1. Settings → Pages → Deploy from a branch → main → / (root) → Save。若已設定相同來源，不需重複儲存。
2. 等部署完成後，確認 https://tlshstudent-max.github.io/ 能看到會標與官方介紹，https://tlshstudent-max.github.io/favicon.png 能開啟圖片。
3. Google Search Console 新增或選擇「網址前置字元」資源 https://tlshstudent-max.github.io/，完成擁有權驗證後提交 https://tlshstudent-max.github.io/sitemap.xml，並對根網址和原官網首頁使用「網址審查 → 請求建立索引」。

原官網、幹部登入與 OAuth 回呼仍使用原網址，不需改動 Supabase 或 Google 登入設定。

根頁已保留原官網公開的 Search Console 驗證標記；若 Console 要求不同標記，請依該資源提供的新標記更新 index.html。標記存在不等於已完成擁有權驗證。

這些訊號讓 Google 能在主機根層級讀到網站名稱及 favicon，但 Google 仍自行決定顯示內容及抓取時間。這不是立即更新、指定排名或保證縮圖的服務。

## 網站名稱

根首頁宣告唯一的 `https://tlshstudent-max.github.io/#website`，首選名稱為「斗六高中學生會」，並列出正式全名、「斗中學生會」與英文名稱。原官網與文件庫等內容頁應透過相同 `@id` 指向本網站，保留原本內容網址與 canonical；不需要搬移網站或更動登入設定。

圖示、網站名稱與摘要由 Google 分別處理。若圖示正確但仍顯示 GitHub，請在 Search Console 審查根網址，查看已檢索 HTML 是否含更新後的網站名稱，再請求重新建立索引。這是協助 Google 辨識的訊號，不能保證它採用特定名稱。
