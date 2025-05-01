# ShopMate E-Commerce Frontend

## 🚀 Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tsingha97/ecommerce-frontend.git
   cd ecommerce-frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   - Open your browser at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```
   - Preview the production build with `npm run preview`

---

## 🛠️ Brief Explanation of Approach

- **Project Setup**  
  Initialized with Vite + React for fast builds and HMR.
- **Styling**  
  Used Tailwind CSS for utility-first styling and rapid responsive design.
- **State Management**  
  Employed React Context API + `useReducer` to handle cart state (adding, removing, updating quantities).
- **Routing**  
  Utilized React Router DOM for SPA navigation between Home, Products, and Cart pages.
- **Data Fetching**  
  Leveraged built-in `fetch` API to retrieve products from Fake Store API.
- **Component Structure**
  - **Layout**: `Header`, `Footer`, `Hero`, `FeaturedProducts`
  - **Product Display**: `ProductListingPage`, `ProductCard`
  - **Cart**: `MiniCart` (dropdown), `FullCartPage` (detailed view)

---

## 💡 Assumptions Made

1. **Dummy Data Source**  
   Products are fetched from a public dummy API (Fake Store API)—no real backend integration.
2. **User Authentication**  
   No user login or profile management—assumes a guest checkout experience.
3. **Responsive Breakpoints**  
   Standard Tailwind CSS breakpoints used (mobile: 1–640px, tablet: 641–768px, desktop: 769px+).
