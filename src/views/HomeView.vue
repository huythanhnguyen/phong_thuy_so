<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <font-awesome-icon icon="phone-alt" class="text-primary text-xl" />
          <span class="font-semibold text-lg text-gray-800">Phong Thủy Số</span>
        </div>
        <div class="flex space-x-3">
          <button @click="navigateTo('login')" class="auth-btn login-btn hover:bg-black">
            Đăng nhập
          </button>
          <button @click="navigateTo('register')" class="auth-btn signup-btn hover:bg-gray-100">
            Đăng ký
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-light to-blue-50 py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-8 lg:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Giải Mã Vận Mệnh Qua Bát Cục Linh Số
            </h1>
            <p class="text-lg text-gray-700 mb-6">
              Phương pháp cổ xưa kết hợp Kinh Dịch và Số Học giúp bạn tìm hiểu ý nghĩa sâu xa của các con số trong cuộc sống. Áp dụng cho số điện thoại, CCCD, biển số xe, tài khoản ngân hàng...
            </p>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button @click="navigateTo('register')" class="btn-primary py-3 px-6 text-center">
                Đăng ký miễn phí
              </button>
              <button @click="scrollToChat" class="btn-outline py-3 px-6 text-center">
                Dùng thử ngay
              </button>
            </div>
          </div>
          <div class="lg:w-1/2">
            <img src="/img/numbers-illustration.svg" alt="Phong thủy số" class="w-full max-w-md mx-auto object-contain" 
            onerror="this.onerror=null; this.src='https://via.placeholder.com/500x400?text=Phong+Thuy+So'"/>
      </div>
        </div>
      </div>
    </section>

    <!-- Lý Do Tin Vào Bát Cục Linh Số Section - MỚI -->
   <!-- Section Tại Sao Bát Cục Linh Số Phù Hợp Với Mọi Người -->
<section class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Tại Sao Bát Cục Linh Số Phù Hợp Với Mọi Người</h2>
    <p class="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
      Trong thời đại số, vạn vật quanh ta đều gắn liền với những con số có ảnh hưởng sâu sắc đến cuộc sống
    </p>
    
    <div class="grid md:grid-cols-2 gap-10">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h3 class="text-xl font-bold mb-4 text-primary">Cuộc Sống Hiện Đại Không Thể Tách Rời Con Số</h3>
        <p class="text-gray-700 mb-4">
          Vạn vật đều là số, trong mọi mặt của cuộc sống: Ngày tháng, tuổi tác, số tầng lầu, số nhà, tuyến xe buýt, biển số xe, số điện thoại, số thẻ ngân hàng, giá cả hàng hóa, chuyến bay... tất cả đều vây quanh chúng ta hàng ngày.
        </p>
        <p class="text-gray-700 mb-4">
          Đặc biệt là điện thoại, công cụ thiết yếu mà hiện nay ai cũng cần sử dụng, tập trung lượng lớn thông tin. Tài khoản ngân hàng, mã số sản phẩm, mã số khách hàng - đều là những dãy số không thể thiếu trong đời sống hiện đại.
        </p>
        <div class="bg-blue-50 p-4 rounded-lg">
          <p class="italic text-gray-600">
            "Năng Lượng Số Học là một môn học bắt buộc trong xã hội hiện nay. Bộ tư liệu này đem thầm áo Dịch Kinh chuyển thành Dịch Học Số đơn giản, thông qua Số giải thích năng lượng từ trường trong cuộc sống nhân sinh."
          </p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h3 class="text-xl font-bold mb-4 text-primary">Minh Chứng Từ Thực Tế Cuộc Sống</h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
              <font-awesome-icon icon="check" class="text-green-600 text-xs" />
            </div>
            <div class="ml-3">
              <p class="text-gray-700">
                <span class="font-semibold">Thành công tài chính:</span> Nhiều người bình thường nhờ sử dụng dãy số vượng Tài, vượng Quan đã trở thành người giàu có. Khi phù hào trở nên giàu có thì Số tiếp tục ví họ mà thu nạp tài vật bất phương.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
              <font-awesome-icon icon="check" class="text-green-600 text-xs" />
            </div>
            <div class="ml-3">
              <p class="text-gray-700">
                <span class="font-semibold">Cải thiện quan hệ cá nhân:</span> Một người đàn ông nhiều nữ nhân vây quanh vì dùng dãy số thúc đào hoa, lợi hôn nhân, nhờ đó rất nhanh tìm được ý trung nhân và có hôn nhân hạnh phúc.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
              <font-awesome-icon icon="check" class="text-green-600 text-xs" />
            </div>
            <div class="ml-3">
              <p class="text-gray-700">
                <span class="font-semibold">Vượt qua khó khăn:</span> Nhiều người đang ở tình cảnh khó khăn, bắt đầu dùng dãy số cát tường, không lâu sau thoát khỏi tình trạng quẫn bách, mọi thứ đều tiến vào hoàn cảnh tốt, đạt được tình hình lý tưởng.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
              <font-awesome-icon icon="check" class="text-green-600 text-xs" />
            </div>
            <div class="ml-3">
              <p class="text-gray-700">
                <span class="font-semibold">Tránh tai ương:</span> Nhiều số điện thoại và biển số xe có thể gây tai nạn, thậm chí dẫn đến huyết quang, tai ương lao ngục. Bát Cục Linh Số giúp tránh những con số xấu này.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <h3 class="text-xl font-bold mb-4 text-center text-primary">Cùng Tương Hỗ Với Sức Mạnh Của Con Số</h3>
      <p class="text-gray-700 mb-4">
        Số và người tương hỗ hấp dẫn - người tụ thọp Số, Số và người cũng giống như nhau. Người có đang từ trường gì thì sẽ hấp dẫn dãy Số đó, mà Số có dòng từ trường gì lại dễ dàng hấp dẫn hạng người đó.
      </p>
      <div class="bg-yellow-50 p-5 rounded-lg">
        <p class="font-semibold text-center text-gray-800 mb-2">Sự thật quan trọng</p>
        <p class="text-gray-700">
          "Có được một dãy số vượng Tài hút Tài lại có thể thủ Tài thì không thể ngờ bạn sẽ thu được Tài Phú lớn, thành công, được quý nhân giúp đỡ. Thông qua tổ hợp và sắp xếp Số để đạt được hiệu quả cải thiện tài vận, hôn nhân, sự nghiệp, khỏe mạnh cũng như quan vận, quý nhân vận."
        </p>
      </div>
      <p class="text-gray-700 mt-4">
        Ai nắm giữ chân lý chính là nắm giữ cưỡng giá vận mệnh, ai có được tài phú người đó là người thành công. Muốn làm đại sự lại không có quý nhân nâng đỡ mà buồn khổ, phiền não, cảm thấy mình sinh không gặp thời, mệnh vận trêu người.
      </p>
    </div>
  </div>
</section>

    <!-- Features Grid - Cập nhật -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Ứng Dụng Trong Cuộc Sống</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon icon="mobile-alt" />
            </div>
            <h3 class="feature-title">Số Điện Thoại</h3>
            <p class="feature-description">Phân tích từng cặp số để tìm ra sự cân bằng giữa tứ cát tứ hung, giúp thu hút tài lộc, quý nhân và cơ hội nghề nghiệp.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon icon="id-card" />
            </div>
            <h3 class="feature-title">Căn Cước Công Dân</h3>
            <p class="feature-description">Khám phá mã số định danh của bạn có ảnh hưởng gì đến vận mệnh, sự nghiệp và đường đời từ góc nhìn số học.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon icon="car" />
            </div>
            <h3 class="feature-title">Biển Số Xe</h3>
            <p class="feature-description">Phân tích biển số xe để tránh tai nạn, sự cố và mang lại may mắn trong di chuyển. Đặc biệt quan trọng với người thường xuyên lái xe.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon icon="credit-card" />
            </div>
            <h3 class="feature-title">Số Tài Khoản</h3>
            <p class="feature-description">Lựa chọn số tài khoản ngân hàng phù hợp để thu hút tài lộc, thịnh vượng và thuận lợi trong giao dịch tài chính.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Những Điều Bạn Nên Biết Section - MỚI -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Những Điều Bạn Nên Biết</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-primary-light p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4 text-primary">Các cặp số quan trọng</h3>
            <div class="grid grid-cols-2 gap-3 mb-6">
              <div class="bg-white p-3 rounded shadow-sm">
                <span class="font-bold text-green-600 block">Thiên Y (Cát): </span>
                <span class="text-sm text-gray-600">13, 31, 68, 86, 49, 94, 27, 72</span>
              </div>
              <div class="bg-white p-3 rounded shadow-sm">
                <span class="font-bold text-green-600 block">Sinh Khí (Cát): </span>
                <span class="text-sm text-gray-600">14, 41, 67, 76, 39, 93, 28, 82</span>
              </div>
              <div class="bg-white p-3 rounded shadow-sm">
                <span class="font-bold text-red-600 block">Tuyệt Mệnh (Hung): </span>
                <span class="text-sm text-gray-600">12, 21, 69, 96, 48, 84, 37, 73</span>
              </div>
              <div class="bg-white p-3 rounded shadow-sm">
                <span class="font-bold text-red-600 block">Ngũ Quỷ (Hung): </span>
                <span class="text-sm text-gray-600">18, 81, 79, 97, 36, 63, 24, 42</span>
              </div>
            </div>
            <p class="text-sm text-gray-700">
              * Đây chỉ là một phần trong hệ thống 8 sao (Tứ Cát Tứ Hung)
            </p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Cách Phân Tích Dãy Số</h3>
            <ol class="list-decimal pl-6 space-y-3">
              <li class="text-gray-700">
                <span class="font-semibold">Chia dãy số thành các cặp liền kề</span>
                <p class="text-sm text-gray-600">Ví dụ: 0912345678 → 09, 91, 12, 23, 34, 45, 56, 67, 78</p>
              </li>
              <li class="text-gray-700">
                <span class="font-semibold">Xác định mỗi cặp thuộc loại sao nào</span>
                <p class="text-sm text-gray-600">Dựa vào bảng đối chiếu 64 cặp số với 8 loại sao</p>
              </li>
              <li class="text-gray-700">
                <span class="font-semibold">Đánh giá tỷ lệ cát/hung</span>
                <p class="text-sm text-gray-600">Tốt nhất là cân bằng (50/50) hoặc thiên về cát</p>
              </li>
              <li class="text-gray-700">
                <span class="font-semibold">Xem xét vị trí trong dãy số</span>
                <p class="text-sm text-gray-600">3 số cuối quan trọng nhất, ảnh hưởng trực tiếp đến hiện tại</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Chat Section -->
    <section id="demo-chat" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">Dùng thử ngay</h2>
        <p class="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Nhập số điện thoại để phân tích hoặc đặt câu hỏi về ý nghĩa của các con số. 
          Trải nghiệm phân tích cơ bản không cần đăng nhập!
        </p>
        
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <!-- Chat Messages -->
            <div class="h-80 overflow-y-auto p-4 bg-gray-50">
              <div class="mb-4 max-w-[80%] rounded-lg p-3 bg-white shadow-sm ml-0 mr-auto">
                Xin chào! Tôi là trợ lý phân tích Bát Cục Linh Số. Bạn có thể nhập số điện thoại để phân tích hoặc đặt câu hỏi về ý nghĩa các con số.
              </div>
              
              <div class="mb-4 max-w-[80%] rounded-lg p-3 bg-primary-light mr-0 ml-auto">
                0912 345 678
              </div>
              
              <div class="mb-4 max-w-[80%] rounded-lg p-3 bg-white shadow-sm ml-0 mr-auto">
                <p class="mb-2"><strong>Phân tích sơ bộ cho số 0912345678:</strong></p>
                <p class="mb-1">• Tổng: 9 cặp số (5 cát tinh, 4 hung tinh)</p>
                <p class="mb-1">• Tỷ lệ: 55% cát - 45% hung (Thiên về cát)</p>
                <p class="mb-1">• Ba số cuối (678): Bao gồm 2 cát tinh, mang lại may mắn</p>
                <p class="mb-2">• Số này phù hợp cho mục đích công việc và phát triển sự nghiệp</p>
                <p><em>Đăng ký để xem phân tích chi tiết và ý nghĩa từng cặp số!</em></p>
              </div>
            </div>
            
            <!-- Chat Input -->
            <div class="border-t border-gray-200 p-4">
              <div class="flex">
                <input 
                  type="text" 
                  v-model="userInput" 
                  class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Nhập số điện thoại hoặc đặt câu hỏi..."
                  @keyup.enter="sendMessage"
                />
                <button 
                  @click="sendMessage" 
                  class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark"
                  :disabled="!userInput.trim()"
                >
                  <font-awesome-icon icon="paper-plane" />
                </button>
              </div>
              <p class="text-xs text-gray-500 mt-2">
                Nhập số điện thoại hoặc câu hỏi như "Số 8 có ý nghĩa gì trong phong thủy?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trường Hợp Thành Công Section - MỚI -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Trường Hợp Thành Công</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6 border-t-4 border-green-500">
            <div class="text-gray-500 mb-3">
              <font-awesome-icon icon="quote-left" class="text-green-200 text-3xl" />
            </div>
            <p class="mb-4 text-gray-700">
              "Tôi đã thay đổi số điện thoại theo phương pháp Bát Cục Linh Số từ hai năm trước. Từ một người kinh doanh nhỏ lẻ, hiện tôi đã mở rộng được 3 chi nhánh và doanh thu tăng gấp 5 lần."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                <font-awesome-icon icon="user" class="text-primary" />
              </div>
              <div class="ml-3">
                <h4 class="font-semibold">Nguyễn Văn A</h4>
                <p class="text-sm text-gray-500">Chủ doanh nghiệp, Hà Nội</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6 border-t-4 border-blue-500">
            <div class="text-gray-500 mb-3">
              <font-awesome-icon icon="quote-left" class="text-blue-200 text-3xl" />
            </div>
            <p class="mb-4 text-gray-700">
              "Sau khi chọn biển số xe theo phương pháp Tứ Cát Tứ Hung, không chỉ tôi tránh được tai nạn giao thông mà còn gặp nhiều may mắn bất ngờ trong công việc, dường như xe của tôi hút cả tài lộc."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                <font-awesome-icon icon="user" class="text-primary" />
              </div>
              <div class="ml-3">
                <h4 class="font-semibold">Trần Thị B</h4>
                <p class="text-sm text-gray-500">Nhân viên kinh doanh, TP. HCM</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6 border-t-4 border-yellow-500">
            <div class="text-gray-500 mb-3">
              <font-awesome-icon icon="quote-left" class="text-yellow-200 text-3xl" />
            </div>
            <p class="mb-4 text-gray-700">
              "Tôi đã từng gặp nhiều khó khăn trong các mối quan hệ. Sau khi đổi số điện thoại có nhiều cặp 'Diên Niên' và 'Sinh Khí', tôi đã gặp được người bạn đời hiện tại và xây dựng gia đình hạnh phúc."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                <font-awesome-icon icon="user" class="text-primary" />
              </div>
              <div class="ml-3">
                <h4 class="font-semibold">Lê Văn C</h4>
                <p class="text-sm text-gray-500">Kỹ sư IT, Đà Nẵng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Câu hỏi thường gặp</h2>
        
        <div class="max-w-3xl mx-auto space-y-4">
          <div class="bg-white rounded-lg shadow-sm p-4">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-semibold">Phương pháp Tứ Cát Tứ Hung là gì?</h3>
              <font-awesome-icon icon="chevron-down" class="text-gray-500" />
            </div>
            <div class="mt-4 text-gray-600">
              Phương pháp Tứ Cát Tứ Hung là cách phân tích số học dựa trên Kinh Dịch cổ đại, phân chia 64 cặp số thành 8 loại sao (4 cát tinh mang năng lượng tích cực và 4 hung tinh mang năng lượng thách thức). Mỗi cặp số tạo nên rung động năng lượng riêng, ảnh hưởng đến vận mệnh của người sử dụng.
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-sm p-4">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-semibold">Làm thế nào để chọn số điện thoại hợp phong thủy?</h3>
              <font-awesome-icon icon="chevron-down" class="text-gray-500" />
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-sm p-4">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-semibold">Tại sao biển số xe lại quan trọng trong Bát Cục Linh Số?</h3>
              <font-awesome-icon icon="chevron-down" class="text-gray-500" />
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-sm p-4">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-semibold">Số CCCD có thực sự ảnh hưởng đến vận mệnh không?</h3>
              <font-awesome-icon icon="chevron-down" class="text-gray-500" />
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-sm p-4">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-semibold">Tôi có thể thay đổi số nào để cải thiện vận mệnh?</h3>
              <font-awesome-icon icon="chevron-down" class="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6">Sẵn sàng cải thiện vận mệnh qua Bát Cục Linh Số?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Đăng ký ngay hôm nay để phân tích chi tiết số điện thoại, biển số xe, CCCD và nhiều hơn nữa!
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button @click="navigateTo('register')" class="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Bắt đầu ngay
          </button>
          <button @click="navigateTo('bat-cuc-linh-so')" class="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Phong Thủy Số</h3>
            <p class="text-sm opacity-75">
              Giải mã ý nghĩa con số trong cuộc sống với phương pháp Bát Cục Linh Số - Tứ Cát Tứ Hung, giúp bạn tận dụng năng lượng tích cực và tránh năng lượng tiêu cực.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên kết</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Trang chủ</a></li>
              <li><a href="#" class="hover:text-white">Dịch vụ</a></li>
              <li><a href="#" class="hover:text-white">Giới thiệu</a></li>
              <li><a href="#" class="hover:text-white">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Phân tích số điện thoại</a></li>
              <li><a href="#" class="hover:text-white">Phân tích biển số xe</a></li>
              <li><a href="#" class="hover:text-white">Phân tích CCCD</a></li>
              <li><a href="#" class="hover:text-white">Phân tích số tài khoản</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <font-awesome-icon icon="envelope" class="mr-2" />
                <a href="mailto:contact@phongthuyso.vn" class="hover:text-white">contact@phongthuyso.vn</a>
              </li>
              <li class="flex items-center">
                <font-awesome-icon icon="phone" class="mr-2" />
                <a href="tel:+84123456789" class="hover:text-white">0123 456 789</a>
              </li>
              <li class="flex items-center">
                <font-awesome-icon icon="map-marker-alt" class="mr-2" />
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
          &copy; {{ currentYear }} Phong Thủy Số - Mọi quyền được bảo lưu
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Computed
const currentYear = computed(() => new Date().getFullYear())

// Chat component
const userInput = ref('')
const isTyping = ref(false)

// Methods
const navigateTo = (target) => {
  if (target === 'register') {
    router.push({ name: 'login', query: { tab: 'register' } })
  } else if (target === 'bat-cuc-linh-so') {
    router.push({ name: 'guides', params: { slug: 'bat-cuc-linh-so' } })
  } else {
    router.push({ name: target })
  }
}

const scrollToChat = () => {
  const element = document.getElementById('demo-chat')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const sendMessage = () => {
  if (!userInput.value.trim()) return
  
  // Clear input
  userInput.value = ''
  
  // Redirect to login
  setTimeout(() => {
    alert('Đăng ký/đăng nhập để sử dụng tính năng phân tích chi tiết!')
    navigateTo('login')
  }, 1000)
}

// Redirect to app if already logged in
onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push({ name: 'app' })
  }
})
</script>

<style scoped>
/* Base Styling */
.auth-btn {
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.login-btn {
  background-color: #2d2d2d;
  color: white;
}

.signup-btn {
  background-color: white;
  color: #2d2d2d;
  border: 1px solid rgba(0,0,0,0.2);
}

.btn-primary {
  background-color: #4361ee;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-primary:hover {
  background-color: #3a56d4;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(67, 97, 238, 0.2);
}

.btn-outline {
  background-color: transparent;
  color: #4361ee;
  font-weight: 600;
  border-radius: 0.5rem;
  border: 2px solid #4361ee;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-outline:hover {
  background-color: rgba(67, 97, 238, 0.1);
  transform: translateY(-2px);
}

/* Feature Card */
.feature-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background-color: rgba(67, 97, 238, 0.1);
  color: #4361ee;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  transition: all 0.3s;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  background-color: #4361ee;
  color: white;
}

.feature-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
}

.feature-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { transform: scale(0.95); }
  50% { transform: scale(1.05); }
  100% { transform: scale(0.95); }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.8s ease-out;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem !important;
  }
  
  h2 {
    font-size: 1.75rem !important;
  }
  
  .feature-card {
    padding: 1.25rem !important;
  }
}
</style>