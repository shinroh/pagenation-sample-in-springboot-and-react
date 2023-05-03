# pagenation-sample-in-springboot-and-react

当プログラムは、SpringBoot3 と Sematic UI React による Pagination のサンプルです。

・back/demo フォルダ内で ./gradlew bootRun を実行すると、API サーバーが起動します。
確認したJavaのバージョン：openjdk version "17.0.6" 2023-01-17

・front フォルダ内で npm i を実行すると、NodeModulesを取得します。開発実行時は、npm start でサーバーを立ち上げるとページネーションのサンプルの画面を表示します。
確認したNode.jsのバージョン：v14.15.3

・H2Console
http://localhost:8080/h2-console/l

上記から、ユーザーのテストデータを追加してください。

DriverClass： org.h2.Driver　JDBC URL： jdbc:h2:mem:testdb
