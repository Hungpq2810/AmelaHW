Bind method: getInfo -> "tôi tên là dũng, tôi năm nay 18 tuổi"
Call method: getInfo -> "tôi tên là dũng, tôi năm nay 18 tuổi"
Apply method: getInfo -> "tôi tên là dũng, tôi năm nay 18 tuổi"

-> Sự khác nhau giữa bind, call và apply
Bind: tạo ra một hàm mới, sử dụng this của không gian mà hàm mới đó tạo ra
Call & apply: Gọi hàm sẵn có 1 cách trực tiếp với ngữ cảnh (this) cụ thể. Call thì tham số đằng sau truyền sau dấu phẩy, apply thì tham số đằng sau truyền theo array


Map: Key-value pair, type có thể là object, function hoặc primitive. 
Map không có key mặc định, không thể bị override prototype
Key order của map là strait forward. Size của map được lấy từ Map.prototype.size()
Map is iterable. Map tiện lợi cho việc thêm bớt key-value pair
Các phương thức của map: groupBy(), clear(), delete(), entries(), get(), has(), keys(), set(), values()


The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.