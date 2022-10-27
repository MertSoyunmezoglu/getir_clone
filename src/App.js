import { Route, Routes } from "react-router-dom";
import Modal from "components/modals/BaseModal";
import { useSelector } from "react-redux";
import Page404 from "components/404";
import ProtectedRoute from "authentication/ProtectedRoute";
import PhoneSignUp from "authentication/PhoneSignUp";
import Signup from "authentication/Signup";
import HomeLayout from "pages/mainpage";
import Home from "pages/mainpage/Home";
import YemekLayout from "pages/yemek";
import Yemek from "pages/yemek/Yemek";
import BuyukLayout from "pages/buyuk";
import Buyuk from "pages/buyuk/Buyuk";
import SuLayout from "pages/su";
import Su from "pages/su/Su";
import AccountLayout from "pages/account";
import Account from "pages/account/Account";
import { UserAuthContextProvider } from "context/UserAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Kategoriler from "pages/subpages/Kategoriler";
import Restoranlar from "pages/subpages/Restoranlar";
import { GlobalContextProvider } from "context/GlobalContext";
import Address from "pages/account/Address";
import Favorites from "pages/account/Favorites";
import BillingInfo from "pages/account/BillingInfo";
import PaymentMethods from "pages/payment/PaymentMethods";
import Contact from "pages/account/Contact";
import PastOrdersList from "pages/account/PastOrdersList";
import Payment from "pages/payment/Payment";

function App() {
  const { open, data } = useSelector((state) => state.modal);

  return (
    <>
      <ToastContainer />

      <GlobalContextProvider>
        <UserAuthContextProvider>
          {open && <Modal name={open} data={data} />}

          <Routes>
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<HomeLayout />}>
              <Route index={true} element={<Home />} />
              <Route
                path="kategoriler"
                element={
                  <ProtectedRoute>
                    <Kategoriler />
                  </ProtectedRoute>
                }
              >
                <Route path=":id" element={<Kategoriler />}>
                  <Route path=":number" element={<Kategoriler />} />
                </Route>
              </Route>
            </Route>

            <Route path="/yemek" element={<YemekLayout />}>
              <Route index={true} element={<Yemek />} />
              <Route
                path="restoranlar"
                element={
                  <ProtectedRoute>
                    <Restoranlar />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/buyuk" element={<BuyukLayout />}>
              <Route index={true} element={<Buyuk />} />
              <Route
                path="kategoriler"
                element={
                  <ProtectedRoute>
                    <Kategoriler />
                  </ProtectedRoute>
                }
              />
              <Route path=":list" element={<Kategoriler />}>
                <Route path=":sublist" element={<Kategoriler />}>
                  <Route path=":id" element={<Kategoriler />} />
                </Route>
              </Route>
            </Route>

            <Route path="/su" element={<SuLayout />}>
              <Route index={true} element={<Su />} />
              <Route
                path="kategoriler"
                element={
                  <ProtectedRoute>
                    <Kategoriler />
                  </ProtectedRoute>
                }
              />
              <Route path=":list" element={<Kategoriler />}>
                <Route path=":sublist" element={<Kategoriler />}>
                  <Route path=":id" element={<Kategoriler />} />
                </Route>
              </Route>
            </Route>

            <Route
              path="/hesap"
              element={
                <ProtectedRoute>
                  <AccountLayout />
                </ProtectedRoute>
              }
            >
              <Route index={true} element={<Account />} />
              <Route path="adreslerim" element={<Address />} />
              <Route path="favori-urunlerim" element={<Favorites />} />
              <Route path="gecmis-siparislerim" element={<PastOrdersList />} />
              <Route path="odeme-yontemlerim" element={<PaymentMethods />} />
              <Route path="fatura" element={<BillingInfo />} />
              <Route path="iletisim-tercihleri" element={<Contact />} />
            </Route>

            <Route
              path="/odeme"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </UserAuthContextProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
