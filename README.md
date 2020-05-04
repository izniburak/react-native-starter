# React Native Starter

Kendi projelerim için uzun zamandır boilerplate tadında bir React Native Kit yapmayı düşünüyordum. Bildiğiniz gibi konfigurasyonlar, dizin yapıları, temel componentler falan derken projelere başlangıç için fazlaca vakit kaybedebiliyoruz. Bunun için temel olarak bir yapı oluşturmak istedim.

Tam olarak bu noktada; **_[Adem İlter](https://github.com/ademilter)_**, son dönemlerde harika bir React Native eğitimi hazırladı. Keyif alarak ve gayet güzel bilgiler/trickler kazanarak bu eğitimi fırsat buldukça takip ettim. Yeni başlayacaklar dışında, React Native ile daha önce proje geliştirmiş bir çok kişiye de oldukça fazla kazanımlar elde ettirebilecek bir seri olmuş. Bu videolardan edindiğim bilgileri, daha önce kendi oluşturduğum yapılarla da birleştirerek, hazırlamayı düşündüğüm Starter Kit'e yön verdim.

Bu Kit içerisinde de bu videolarda yer alan paketler olduğundan, kullanımlarını detaylı görebilmek ve öğrenebilmek için Adem İlter'in eğitim serisine **_[buradan](https://www.youtube.com/playlist?list=PLadt0EaV4m3CWiofBOml0r95OmhiM6I6v)_** hızlıca göz atabilirsiniz. Eğer aşağıda belirtilen paketler ve kavramlar size yabancıysa, eğitim serisine hemen başlamanızı tavsiye ederim.

## Kullanılan Paketler

- [react-navigation (v5)](https://reactnavigation.org/)
- [styled-components](https://styled-components.com/)
- [styled-system](https://styled-system.com/)
- [react-native-svg](https://github.com/react-native-community/react-native-svg) _(with [@svgr/cli](https://react-svgr.com/))_
- [Context API](https://reactjs.org/docs/context.html) _(for global state management)_

## Kullanım

Ben paket yöneticisi olarak `yarn` kullanıyorum. O nedenle komutları `yarn` olarak yazacağım ama, siz `npm` kullanıyorsanız, ona göre revize edebilirsiniz.

```
$ git clone https://github.com/izniburak/react-native-starter.git
$ cd react-native-starter
$ yarn
```

Proje adını değiştirmek için `app.json` dosyası içerisindeki bilgileri güncelleyebilirsiniz.

```
{
  "name": "UygulamaPaketAdi",
  "displayName": "Uygulama Adı"
}
```

**_NOT:_** Uygulama adı değişikliğinden sonra Android ve iOS klasörleri içerisindeki dosyalarda da değişiklik gerekebilir. Bunun için en kolay yol, Android ve iOS dizinleri silmek ve tekrar oluşturmak. Bu işlem için direkt olarak kullanılabilecek bir komut yok şu an için. En azından ben bulamadım ama, öneri olarak **_[şuradaki](https://github.com/react-native-community/cli/issues/808#issuecomment-543207588)_** yorumu deneyebilirsiniz. Sizin bir öneriniz varsa, beni yeşillendirebilirsiniz.

Her şey tamamsa, devam edebiliriz.

iOS için önce Pod kurulumlarını yapıp, sonra simulatörü çalıştırabilirsiniz. (MacOS kullanıcıları için)

```
$ yarn pod
$ yarn ios
```

Android için direkt olarak aşağıdaki komut ile simulatörü çalıştırabilirsiniz.

```
$ yarn android
```

Eğer bilgisayarınızda yüklü bağımlılıklar ve React Native kurulum aşamaları ile alakalı lazım olan araç/gereçler ile ilgili bir probleminiz yoksa, uygulama başarılı bir şekilde çalıştırılacaktır. Sonrasında yeni ekranlar, componentler ekleyerek uygulamayı istediğiniz hale getirebilirsiniz.

## Dizin Yapısı

```
index.js
src/
├── assets
│   └── icons
├── components
│   ├── base
│   │   ├── Button.js
│   │   ├── Input.js
│   │   ├── Text.js
│   │   ├── View.js
│   │   └── index.js
│   └── icons
├── constants
│   └── app.js
├── contexts
│   └── app
│       ├── Actions.js
│       ├── Reducer.js
│       ├── index.js
│       └── withAppContext.js
├── screens
│   ├── AboutScreen.js
│   ├── ContentScreen.js
│   └── HomeScreen.js
├── themes
│   └── default.js
└── utils
|   └── compose.js
├── app.js
├── navigator.js
```

İmkanım oldukça faydalı olabilecek componentler ve helperlar ekleyeceğim. Zaten aktif olarak kendim de kullanacağım için (Starter Kit olarak) sürekli güncel tutmam gerekecek. Sizlerinde önerisi, yanlış olduğunu düşündüğünüz şeyler vs varsa bana iletirseniz çok sevinirim.

## Lisans

[MIT Licence](http://opensource.org/licenses/MIT)

---

[izniburak](https://github.com/izniburak) İzni Burak Demirtaş - creator, maintainer
