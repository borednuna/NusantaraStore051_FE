# Frontend for Nusantara Store Project

## Study Case
Briefly, the study case is making a functional e-commerce web that has the minimum requirement stated in the problemset.

## Main Features
- Using Reactjs as the javascript library for web development
- Using Sass as the styling sheet instead of Css because it's more functional and powerful
- Responsive for both desktop and mobile view.
- Using React Router to route pages. The product details for each product fetched from backend is configured using map function.
- Using React Redux and Persistor to store user data in a session.
- Using SwiperJs for the cards carousel and image view.
- Using Material UI for some of the components
- Adhere to clean architecture to [this reference](https://kpiteng.medium.com/react-clean-architecture-e4144a0788b6)
- Profile view when user is logged in
- Cart view when user is logged in and added products to the cart
- Initial design for this web app would be accessible [here](https://www.figma.com/file/cmJ5izxBjRvp2NIbkOo5Q5/NusantaraStore?type=design&node-id=0%3A1&t=4XSihV5JFBowthRh-1)
- The preview of chatbox is added but it's not yet implemented.

## Deployment
- This web app is deployed using Vercel and would be accessible [here](https://nusantarastore051.vercel.app/)

## Constraints / Obstacles
- The resources provided by [backend](https://github.com/borednuna/nusantaraStore051_be) is not secure because it is served over HTTP instead of HTTPS. So the contents of the web app won't load on some browser because HTTP resources are blocked by default. It could be resolved by disabling protection for this web app on the browser.
- The main challenge on the React development itself would be maintaining the user information through the routes. It is resolved by using Redux and Persistor.