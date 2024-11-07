# REACT JS GEREKLI KURULUMLAR

# Kurulum

    ilk olarak react js çalıştırabilmek için bunu yayınlayacak ve yorumlayacak bir sunucuya ihtiyaç var ayrıca paket kurulumları için bir paket yöneticisine ihtiyaç bulunmaktadır.

    Node js tüm gerekli servis ve paket yönetim araçlarını içerisinde barındırmaktadır.

https://nodejs.org/en/download/prebuilt-installer/current

# React kurulumu

    reactJs uygulamalarını kurmak için ve dökümantasyonlar için aşağıdaki liklere tıklayın

https://react.dev/learn/typescript

https://create-react-app.dev/docs/getting-started/

    JS doğası gereği tip güvenliği sağlamaktadır, bu nedenler kodlarımızı daha güvenli ve yönetilebilir yapmak için projelerimizi TypeScript ile kuracağız yada önceden standart olarak kurmuş isek ek olarak TS kurulumu ekliyerek TS haline getireceğiz.

# TS kurulumu olmadan

```bash
    npx create-react-app my-app uygulama-adi
```

# TS kurulumu destekli kurmak

```bash
    npx create-react-app my-app --template typescript uygulama-adi

    npx create-react-app ornek1 --template typescript
```

    Örnek proje:

    npx create-react-app ilkuygulama --template typescript

    DİKKAT!!! kurulumlar ve başlatma işlemleri için öncelikle terminal ekranına giriş yapmak gerekmektedir.
    Burada hangi dizin içerine projeyi atacak iseniz öncelikle klasöre geçin.(Terminalden cd komutu ile)

    ondan sonra o klasörün içerisine yukarıdaki komutu yazarak projeyi olusturunuz.

        Komut : npx create-react-app ilkuygulama --template typescript


    NOT : Eğer proje oluşturulamaz ise;
    -> npm install --save-dev ajv@^7
    Kodunu deneyerek projeyi başlatmayı deniyebilirsin!
