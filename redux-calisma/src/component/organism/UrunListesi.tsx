import React, { useEffect } from 'react'
import UrunCard from '../molecule/UrunCard'
import { IProduct } from '../../models/IProduct';
import { fetchGetAllProducts } from '../../store/feature/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDispatch, useAppSelector } from '../../store';
// interface IUrunListesiProps {
//   sepeteEkle: (urun: IProduct) => void
// }
function UrunListesi() {
  /**
   * fetch işlemi ve set işlemi birbirlerini sonsuz döngüye sokuyor. Sürekli veri çekme işlemi ve render işlemi   dönüp duruyor.
   * const [liste, setListe] = React.useState<IProduct[]>();
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(urunler => setListe(urunler.products)); --> yanlış bir kullanım
   */
  //Doğrusu: 
  /**
  * use effect kendisine verilen bileşenleri takip eder, eğer bu bileşenlerde bir değişiklik olur ise içerisinde var olan arrow fonksiyonu calısır. 
 * Burada bos bir array kullanılır, böylece boş array hiç bir zaman değişmeyeceği için useEffect içerisi sadece sayfa yüklenirken 1 defa çalışır ve bir daha çalışmaz.
 */
  // useEffect(() => {
    //   fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then(urunler => setListe(urunler.products));
    // }, []);
    //const [liste, setListe] = React.useState<IProduct[]>();
    const dispatch = useDispatch<ProductDispatch>();
    const list = useAppSelector(gState => gState.product.productList);
    const isLoading = useAppSelector(gState => gState.product.isProductListLoading);
    useEffect(() => {
      /**
       * DİKKAT!!!
       * asyncThunk tanımlarını direkt olarak kullanamazsınız.
       * çalıştırmak için useDispatch kullanmalısınız.
       */
      dispatch(fetchGetAllProducts());
    },[]);
    console.log("is loading" ,isLoading);
  return (
    <div className="col p-3 mt-4 rounded-3" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
    <label className='form-label'>ürün Listesi</label>
    <div className='row'>
      {
        isLoading ? 
        (
        <div className="spinner-border text-primary d-grid m-auto" role="status"><span className="visually-hidden">Loading...</span></div>) : null
      }
        {
          list?.map((urun, index) => <UrunCard key={index} urun={urun} />)
        }
    </div>
</div>
  )
}

export default UrunListesi