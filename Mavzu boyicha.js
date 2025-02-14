// NavLink - bu web sahifalar o'rtasida o'tish uchun ishlatiladigan maxsus havola (link). Bu React Router kutubxonasida mavjud bo'lib, sahifalar o'rtasida o'tishni osonlashtiradi.
// Foydalanuvchi turli sahifalar o'rtasida osongina o'tishi uchun. Masalan, asosiy sahifa va haqida sahifasi o'rtasida.
// Sahifada NavLink yordamida havola yaratiladi. Foydalanuvchi bu havolaga bosganda, dastur kerakli sahifaga yo'naltiradi.

// import { NavLink } from 'react-router-dom';

// function Navigation() {
//   return (
//     <nav>
//       <NavLink to="/home">Bosh sahifa</NavLink>
//       <NavLink to="/about">Biz haqimizda</NavLink>
//     </nav>
//   );
// }

// Outlet
// Outlet - bu React Router'da ishlatiladigan maxsus komponent bo'lib, u ichki yo'llarni (nested routes) joylashtirish uchun ishlatiladi.Nega kerak?
// Asosiy sahifa ichida turli bo'limlarga yo'naltirishni amalga oshirish uchun. Masalan, asosiy sahifa ichida "Mijozlar", "Buyurtmalar" kabi bo'limlar bo'lishi mumkin.Qanday ishlatiladi?
// Outlet komponenti yo'l tizimida joylashtiriladi va u ichidagi yo'llar avtomatik ravishda Outlet orqali ko'rsatiladi.
// import { Routes, Route, Outlet } from 'react-router-dom';

// function Layout() {
//   return (
//     <div>
//       <Outlet />  {/* Ichki sahifalar bu yerda ko'rsatiladi */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="home" element={<Home />} />
//       </Route>
//     </Routes>
//   );
// }

// Tezkor Holat Boshqaruvi (useState)
// Nima?
// useState - bu React'dagi Hook bo'lib, komponent ichida ma'lumotlarni saqlash va o'zgartirish uchun ishlatiladi.Nega kerak?
// Foydalanuvchi interfeysidagi o'zgarishlarni boshqarish uchun. Masalan, sanash (counter) dasturida necha marta tugmani bosilganini kuzatish.Qanday ishlatiladi?
// useState yordamida ma'lumot holati (state) yaratiladi va uni o'zgartirish funksiyasi ham beriladi.Misol:

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0); // Boshlang'ich qiymat 0

//   return (
//     <div>
//       <p>Siz {count} marta bosdingiz!</p>
//       <button onClick={() => setCount(count + 1)}>
//         Bosish
//       </button>
//     </div>
//   );
// }
