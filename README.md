# Sınav Oluşturma ve Bilgi Sorgulama Programı

Bu projede amaç hem yöneticinin seçtiği sınıflara, sisteme yüklediği öğrencilerin rastgele bir şekilde yerleştirilmesi ve sınav oturumunun kayıt altına alınması. Hem de öğrencinin sistemden numarasını sorgulatarak kayıtlı olduğu sınavları görüp, seçtiği sınava giriş kartını alabilmesi. Bu bir okul projesiydi ve kullanıcı girişi bulunması gerekmiyordu. O yüzden o özellik eksik.

## Kullandığım Teknolojiler

React.js

Router: react-router-dom

State Management: react-redux

Veri Çekmek için: Fetch Api

Veri tabanı: Firebase Realtime Database

Styling: styled-components

Ecxel manüpipaslonu için: Javascript excel kütüphaneleri.

## Tanıtım

Projede ana sayfa olarak yönetici veya öğrenci olarak devam edilebilen bir sayfa var.

Yönetici kısmına girildiğinde yeni bir sınav oluşturma veya oluşturulmuş kayıtları listeleme sekmeleri geliyor. Yeni bir sınav oluşturma ekranında kullanıcıdan öğrencilerin ve sınav bilgilerinin istenilen formatta olduğu bir excel tablosu girmesi ve yan tarafta bulunun kısımdan istediği sınıfları işaretlemesi bekleniyor. Eğer sınıflarda yeterli kontenjan varsa sistem devam ediyor ve hem kaydı oluşturup hemde her sınıf için, sınıfta sınava girecek öğrencilerin yazılı olduğu birer excel tablosu çıkarıyor. Kullanıcı eğer planlanmış kayıtlara bakarsa, oradan istediği sınav kaydını silebilir veya o sınavın sınıflarının excel tablolarını çıkarabilir.

Öğrenci kısmına girildiğinde ise kullanıcı, öğrenci numarasını yazıp sorgulatarak kayıtlı olduğu sınavları görüntüleyebilir, istediği sınav için kendi bilgilerinin olduğu bir giriş kartı çıkartabilir. (Burda canvas kullanarak bir .png dosyası oluşturdum)

## Kurulum ve Kullanım

Bu projeyi bilgisayarınızda çalıştırmak için kod editörünüzde bir klasör açıp, terminalde önce "git init" komutunu, sonra "git clone https://github.com/ibrahimkeles61/final-assignment.git" komutunu çalıştırıp, işlem tamamlandıktan sonra "npm install" (ben npm kullanıyorum) komutuyla gereksinimlerin inmesini beklemelisiniz. Daha sonra terminalde "npm run start" diyerek uygulamayı çalıştırabilirsiniz. Eğer otomatik olarak tarayıcınızda yeni bir sekmede açılmazsa, terminalde "Local:" 'ın yanında yazan adrese tıklayarak (ctrl + click) açılmasını sağlayabilirsiniz.

## Görseller

![1](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/1.jpg?raw=true)
![2](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/2.jpg)
![3](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/3.jpg)
![4](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/4.jpg)
![5](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/5.jpg)
![6](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/6.jpg)
![7](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/7.jpg)
![8](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/8.jpg)
![9](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/9.jpg)
![10](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/10.jpg)
![11](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/11.jpg)
![12](https://github.com/ibrahimkeles61/final-assignment/blob/master/project-views/12.jpg)
