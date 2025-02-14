// Error Boundary yordamida biz ma'lum bir componentlardagi xatolarni ushlab, dastur qolgan qismi ishlashda davom ettira olamiz

// Error Boundary, o'z ichiga olgan componentlardan kelib chiqqan xatolarni ushlaydigan maxsus React componentidir. Agar ichki componentda xato yuz bersa, Error Boundary bu xatoni ushlab, foydalanuvchiga xatolik haqida ma'lumot beradigan xabar yoki o'zgartirilgan interfeysni ko'rsatadi.

// Error Boundary Yaratish
// Class Component sifatida yaratish: Error Boundary faqat class component sifatida yaratilishi mumkin. Ushbu componentda ikkita muhim metod mavjud:

// getDerivedStateFromError(): Xato yuz berganda chaqiriladi va componentning holatini yangilaydi (masalan, xato yuz berganligini ko'rsatish).
// componentDidCatch(): Xato va uning texnik ma'lumotlarini qabul qiladi, bu ma'lumotlar xato haqida tushuncha beradi va dasturchilarga xatoni tuzatishda yordam beradi.

// Error Boundary, class component sifatida yaratiladi. Bu komponentda ikkita muhim metod mavjud: getDerivedStateFromError() va componentDidCatch(). Quyida bu metodlar qanday ishlatilishi haqida misol keltiraman.

// Misol

// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Bu metod xato yuz berganda komponent holatini yangilaydi
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // Bu yerda xato va uning qo'shimcha ma'lumotlarini log qilish mumkin
//     console.log("Xato yuz berdi:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // Agar xato yuz bergan bo'lsa, foydalanuvchiga ko'rsatiladigan UI
//       return <h1>Nimadir noto'g'ri bo'ldi. Iltimos, keyinroq urinib ko'ring.</h1>;
//     }
//     // Agar xato yuz bermagan bo'lsa, bolalarni ko'rsatish
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

// yaratilgan ErrorBoundary komponentini ilovaning boshqa qismida qo'llayolamiz. Misol quyidagi App komponentida, MyComponent xatolikka duch kelsa, ErrorBoundary xato yuz berganligini ushlaydi va foydalanuvchiga xabar beradi.

// import React from 'react';
// import ErrorBoundary from './ErrorBoundary';
// import MyComponent from './MyComponent';

// function App() {
//   return (
//     <ErrorBoundary>
//       <MyComponent />
//     </ErrorBoundary>
//   );
// }

// export default App;
// MyComponent komponentida yuzaga kelishi mumkin bo'lgan istalgan xato ErrorBoundary komponenti tomonidan ushlanadi va foydalanuvchiga "Nimadir noto'g'ri bo'ldi." degan xabar ko'rsatadi.
