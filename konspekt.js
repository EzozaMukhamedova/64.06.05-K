// Routes:  konteyner ichida bir nechta Route komponentlari joylashadi. Faqat bir Route komponenti bir vaqtda faol bo'lishi mumkin.
// Route: Har bir Route komponenti URL manziliga mos keladigan komponentni (element) belgilaydi. Agar URL manzil mos kelmasa, komponent ko'rsatilmaydi.
// path: Bu atribut URL manzilini belgilaydi.
// element: Bu atribut URL manziliga mos kelganda ko'rsatiladigan React komponentini belgilaydi.
// Not Found Route: path="*" bu barcha nomuvofiq URL manzillar uchun javob beradi, ya'ni foydalanuvchi mavjud bo'lmagan sahifaga murojaat qilganda ko'rsatiladigan komponent.

// Asosiy Komponentlar
// React Router-da yo'nalishlar tashkil etish uchun asosiy foydalaniladigan komponentlar:

// BrowserRouter: Ilovaning asosiy routing kontekstini o'rnatadi.
// Routes: Yo'nalishlar konteyneri, faqat bir Route komponenti bir vaqtda faol bo'ladi.
// Route: Har bir URL manzilga mos keladigan komponentni belgilaydi.

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter> */
}

// Dinamik Routing
// Dinamik yo'nalishlar uchun URL'da o'zgaruvchilar qo'llaniladi. Masalan:

// <Route path="/profile/:userId" element={<UserProfile />} />

// useParams Hook'i
// Dinamik yo'nalishlar uchun o'zgaruvchilarni olishda useParams hook'dan foydalaniladi:

// import { useParams } from 'react-router-dom';

// function UserProfile() {
//   let { userId } = useParams();
//   return <div>User ID is: {userId}</div>;
// }

// Not Found Route
// URL manzili hech qaysi yo'nalish bilan mos kelmasa ko'rsatiladigan sahifa uchun:
// <Route path="*" element={<NotFound />} />

// ToastContainer va Toast Xabarlarini Sozlash
// ToastContainer ko'plab parametrlarni qabul qiladi, bu parametrlar orqali toast xabarlarning ko'rinishini sozlash mumkin:

// position: Toast xabarning joylashuvi (top-right, top-center, top-left, bottom-right, va h.k.)
// autoClose: Toast xabarni avtomatik yopilish vaqtini millisekundlarda ko'rsatadi (masalan, 5000 ms = 5 sekund).
// hideProgressBar: Vaqt o'tishi bilan kamayib boruvchi progress barni yashirish.
// newestOnTop: Yangi xabarlar eng yuqorida chiqishi.
// closeOnClick: Xabar ustiga bosilganda yopilishi.
// pauseOnFocusLoss: Foydalanuvchi oynani o'zgartirganda pauza qilinishi.
// draggable: Xabarni sudrab o'zgartirish imkoniyati.
// pauseOnHover: Sichqonchaning xabar ustida turib qolganda pauza qilinishi.

// ToastContainer komponenti xabarlarni qanday ko'rsatish kerakligini sozlaydi. Quyidagi parametrlar ko'p ishlatiladi:

// position: Xabarlar qayerda joylashishi kerakligini belgilaydi.
// autoClose: Xabar qancha vaqt ko'rsatilishi kerakligini (millisekundlarda) belgilaydi.
// hideProgressBar: Xabar yonidagi yuklanish indikatorini yashirish.
// pauseOnHover: Sichqoncha xabar ustida turib qolganda xabar yopilishini to'xtatadi.

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const showNotification = () => toast("Salom! Bu bir xabar.");

//   return (
//     <div>
//       <button onClick={showNotification}>Xabar ko'rsat</button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;

// Xabar Turlari
// Turli xil vaziyatlar uchun turli xabar turlaridan foydalanishingiz mumkin:

// toast.success("Amal muvaffaqiyatli bajarildi!"); // Muvaffaqiyatli amal uchun
// toast.error("Xatolik yuz berdi!"); // Xato yuz berganda

// react-toastify yordamida React ilovalarida xabarlar (toastlar) yaratish oson va samarali. Bu kutubxona yordamida foydalanuvchilarga muhim ma'lumotlarni vaqtincha ko'rsatishingiz mumkin, masalan, ma'lum bir jarayonning natijasi haqida xabar berish. Bu xabarlar tizimi ilovangizni yanada interaktiv va foydalanuvchi do'stlashuviga yordam beradi.
