├── styles/
│   ├── abstracts/              # Tệp biến, mixins, functions
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   ├── base/                   # CSS cơ bản như reset và typography
│   ├── components/             # SCSS cho các component
│   ├── layout/                 # SCSS cho layout như grid, container
│   └── globals.scss            # Tệp SCSS toàn cục để import vào _app.js



<!-- Trong SCSS, nếu bạn import global.scss (mà đã chứa _variables.scss) vào ứng dụng của bạn (ví dụ, trong _app.js của Next.js), thì các biến SCSS từ _variables.scss sẽ không tự động khả dụng trong các file SCSS khác trừ khi bạn import chúng trực tiếp.

Lý do:
SCSS không có khái niệm "global scope" cho các file import. Mỗi file SCSS được biên dịch độc lập và không chia sẻ nội dung với các file khác trừ khi bạn explicitly import. 

Cách giải quyết:
Sử dụng @use hoặc @forward (cách hiện đại và khuyên dùng)
Đây là cách tiếp cận mới hơn trong SCSS, thay thế @import, với các lợi ích như:
+ Tránh xung đột tên biến.
+ Hạn chế các biến không cần thiết bị "rò rỉ" ra phạm vi toàn cục.
Cách tổ chức rõ ràng hơn.

@use:
Dùng để nhập một file SCSS vào file khác, nhưng nội dung của file được nhập sẽ không tự động đưa vào phạm vi toàn cục.
Bạn phải gọi các biến, mixin, hoặc function với namespace.



@forward:
Dùng để xuất nội dung của một file SCSS (có thể từ một file khác) ra ngoài để các file khác có thể sử dụng.




-->





