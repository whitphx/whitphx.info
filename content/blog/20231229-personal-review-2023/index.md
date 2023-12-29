---
title: "2023年やったこと; OSSやその収益化、PyConの話"
date: "2023-12-29T15:17:56+09:00"
description:
tags: ["dev", "log"]
lang: ja
---

## OSS活動

### 概要
[去年](../20221222-personal-review-2022/)から引き続き、個人開発のOSSの開発・メンテを継続している。主なものは以下。
* [Awesome Emacs Keymap](https://marketplace.visualstudio.com/items?itemName=tuttieee.emacs-mcx)
* [streamlit-webrtc](https://github.com/whitphx/streamlit-webrtc)
* [stlite](https://github.com/whitphx/stlite)

趣味で続けていたOSS貢献のうちStreamlitに関連する活動を足がかりに[Hugging Face](https://huggingface.co/)で職を得た。これで有給の業務の一部としてOSSの開発を行えるようになった。
[Gradio-Lite](https://huggingface.co/blog/gradio-lite)は今年新たに始めたプロジェクトで、かつ私にとってHugging Faceの業務として世に出した初めてのOSSとなった。

上記以外にも、利用したOSSや閲覧したドキュメントに不備を見つけたらその都度修正の提案や実装などのcontributionを行うようにしている。

OSSからの収益化に関しては強い関心がある。
ありがたいことに今年も多くの方から寄付をいただいた。
また今年はOSS貢献に対して業務としてまとまった報酬を頂くことができるようになった。

ホストしているプロジェクトが増えてきて、一つあたりにかけられる時間（と精神力）が減ってきている。なんとかしたい。
<!-- これは特に、特定のリポジトリを念頭に寄付をしていだたいている方に対して申し訳なさがある。 -->

友人が増えた。
ここ数年、[Streamlit](https://streamlit.io/)関連が私のOSS活動の大きな部分を占めている。
コードを書くだけではなく、直接・間接のコミュニケーションが発生し、何人かとは実際に会って話したりもした。
またStreamlit関連の発表をきっかけに、日本を含むいくつかのPyConコミュニティに顔を出すようになっていて、こちらでも友人が増えた。

### Streamlit
* Streamlit本家から[stlite, Serverless Streamlit](https://github.com/whitphx/stlite)に対して開発支援をもらった。Streamlit（のオーナーであるSnowflake）からpart-timeで雇用され、業務として私個人のプロジェクトであるstliteの開発を行った。[未踏](https://www.ipa.go.jp/jinzai/mitou/index.html)みたいなスキームだと思った。
* ["Streamlit for Data Science: Create interactive data apps in Python 2nd Edition"](https://amzn.asia/d/8kkylU5)にインタビューを載せてもらった。著者のTylorとはStreamlitコミュニティでの縁。Streamlit co-founder/ex-CEOを含む強い人たちのインタビューに混ぜてもらえて光栄だった。
* Hugging FaceがStreamlit関連のポジションをオープンし、そこで採用された。採用情報自体はパブリックで特に裏口入社的なことはないのだが、私のことを知っているStreamlitコミュニティの知り合いが「このポジションは君に合ってると思うよ」と背中を押してくれたのが大きかった。実際、それまでのStreamlitコミュニティでのアウトプットが特にこのポジションの採用では名刺がわりになったはず。
* [Tokyo Streamlit Meetup](https://info.streamlit.io/december-tokyo-meetup)に登壇した。Streamlitに絡めて、OSS貢献やそれをお金にする方法について話した。個人的に今の興味のど真ん中の話をする機会を頂けて嬉しかった。
    * スライド: https://slides.com/whitphx/oss-career
    * また、国内のStreamlitやOSSに関心のある層の厚さにいい意味で驚かされた。自分はStreamlitを機械学習・コンピュータビジョン系の分野で活用していて、StreamlitがSnowflakeに買収される前にWebの英語コミュニティにいたタイプ。他にリーチするにしてもPyCon周辺だった。一方、このイベントはSnowflakeの日本オフィスや日本ユーザグループの方々が主催していて、私が今まで出会えていなかったデータ畑の人たちや日本語圏のコミュニティとStreamlit買収をきっかけに（？）出会えたことになる。
* ついに[streamlit-webrtc](https://github.com/whitphx/streamlit-webrtc)のスターが1kを超えた。自分がホストするOSSでは初めてなので嬉しい。

### Hugging Face/Gradio
* 上述の通り、Hugging Faceでフルタイムの職を得た。当初のタイトルは"Streamlit Advocate"だったが、おそらくStreamlit以外のこともやるようになったのを反映して、正式採用のタイミングで"ML Developer Advocate"になった。タイトルはAdvocateだが業務時間の半分以上は開発をしている。
* [Gradio](https://github.com/gradio-app/gradio)のWasm版、[Gradio-Lite](https://huggingface.co/blog/gradio-lite)の開発を始めた。実は1年前にStreamlitのWasm版 (stlite)を作った時に以下のようなポストをしたらGradioのCEOと繋がって、GradioのWasm版も作ろうよという話はしていた。その後忙しくてたち消えになっていたが、たまたま私がHugging Faceに入ったので、話が実際に動き出した（GradioはHugging Face傘下）。当時はHF入社の話など全くなかったし、HFに入ったのもStreamlitの縁であって別にGradioをやるためのポジションではなかったのだが、偶然の結果1年前の約束を果たす形でGradioに関わることになった。\
  本体からフォークした個人プロジェクトであるstliteとは違い、Gradio-Liteでは本体のリポジトリに直接コードをコミットし、Gradioブランドとしてリリースした。
https://twitter.com/whitphx/status/1578356200441532417
* Gradio-Liteを作っていると、Gradioそのもののコードにもそれなりに手を入れることになる。通常のPython環境ではないところで動かすことで、既存のあまり綺麗な設計ではないがとりあえず動いているみたいな部分を特殊なエッジケースでストレステストすることになり、より良い設計に書き換える強制力が働くという感じ。あとは単純にGradio-Liteのテストで本体由来のバグを見つけたり。そんな感じで本体のコードにもそこそこ貢献するようになった。
* Gradio-Liteやstliteで見栄えのするアプリを作りたいモチベーションから出発して[transformers.js.py](https://github.com/whitphx/transformers.js.py)を作った。Transformers、Transformers.jsの作者がHF社内にいるのでそういう意味でも自然な流れだった。
    * React Native Webみたいな一周した名前で面白いと思っている
* Gradio-Liteのリリースに際してThursdAIというpodcast/X spaceに出演した。一緒に出たCEOやTransformers.jsの作者がほとんど喋ってくれたので自分の下手な英語をあまり晒さずに済んだがいい経験だった。stliteではこういう機会はなかったので、ブランドを持っている会社の一員として何かをリリースするのは広報力に下駄が履けて良い。
    * https://twitter.com/i/spaces/1PlJQDWQZQyGE （前半1時間は別の話題。後半1時間がGradio-Lite）

### Awesome Emacs Keymap
* そろそろ5年目になるが、今年もちびちび[機能改善やバグ修正をやった](https://github.com/whitphx/vscode-emacs-mcx/pulls?q=is%3Apr+author%3Awhitphx+is%3Aclosed+updated%3A%3E%3D2023-01-01)。
* [Visual Studio Marketplaceの"emacs"タグ](https://marketplace.visualstudio.com/search?term=tag:emacs&target=VSCode&category=All%20categories&sortBy=Relevance)での検索順位で、["Emacs Keymap"](https://marketplace.visualstudio.com/items?itemName=hiro-sun.vscode-emacs)を抜いて3位から2位になった。
    * 以前「Awesome Emacs Keymapのできはいいが検索結果のトップにないのが残念」という旨のコメントをもらったことがある。Marketplaceでの検索順位の上げ方が分からず対応できずにいたが、とりあえず一つ上がってよかった。
    * 正直、1位の[Emacs Friendly Keymap](https://marketplace.visualstudio.com/items?itemName=lfs.vscode-emacs-friendly)も3位の[Emacs Keymap](https://marketplace.visualstudio.com/items?itemName=hiro-sun.vscode-emacs)も4年以上更新されていないし、[Awesome Emacs Keymap](https://marketplace.visualstudio.com/items?itemName=tuttieee.emacs-mcx)はレビューもダントツなので、なぜ1位にならないのかずっと不思議。1位には「1位だからたくさんDLされて1位になる」ポジティブフィードバックがかかっているだけだと思う。自分がこれら2つに不満を持って作ったので当然だが、Awesome Emacs Keymapはこの2つより絶対に良いと信じている。

### OSSの収益化について

* 引き続き、[GitHub Sponsors](https://github.com/sponsors/whitphx), [Buy Me a Coffee](https://www.buymeacoffee.com/whitphx), [Ko-fi](https://ko-fi.com/D1D2ERWFG)経由で寄付をいただいている。ありがとうございます。
    * さらに去年に引き続き、企業からのスポンサーが2社。[Databutton](https://www.databutton.io/)と[Hal9](https://hal9.com/)。ありがとうございます。
* Streamlit/Snowflakeからstliteに対してお金が出た。
* Streamlitコミュニティの友人が[Databutton](https://www.databutton.io/)に[入社した](https://twitter.com/DatabuttonHQ/status/1699487845717622815)。この会社は私のstliteをsponsorしてくれてもいる。この会社はStreamlitを利用してプロダクトを開発しており、彼を雇用したり、私のstliteの将来性に期待して支援するインセンティブがある。
  私のHF入社もそうだが、営利企業Streamlit inc.(買収後はSnowflake)がStreamlitというOSSとそのコミュニティを開発・運営し、そこから別の営利企業に雇用される個人が生まれる、というのはOSSを介した個人のキャリア形成の面白いモデルだと思うし、コミュニティのある側面での成熟を感じる。
* この辺りの話はTokyo Streamlit Meetupの[スライド](https://slides.com/whitphx/oss-career)にも盛り込んだ。私個人として最近の大きな関心ごとだし、Webで関連情報が増えてきているとも感じる。

## Python/PyCon
今年はstliteの発表をするために、以下のPyConに参加した。

* PyCon DE & PyData Berlin
* PyCon LT
* PyCon APAC
* PyCon TW

https://www.youtube.com/watch?v=XivJYZUm1GY&list=PLGVZCDnMOq0peDguAzds7kVmBr8avp46K&index=113

https://www.youtube.com/watch?v=fYB5hhM7P8k

今年から現地開催に戻った会場も多く、各地で色々な人と交流できた。

また、そのご縁でPyCon JP運営の寺田さんのpodcastに出演させていただいた。
1回目の出演については[以前書いた](../20230627-my-first-podcast/)が、その後PyVistaコントリビュータの小山さんの計らいでもう一度出演した。こちらは小山さんとご一緒させていただき、やはり関心のあるOSSやその収益化の話をした→
[#82 小山さんwhitphxさんをゲストに OSSを仕事にをキーワードにHugging Faceや周辺のPython UIフレームワークについて語る](https://podcast.terapyon.net/episodes/0091.html)。今年はこの話ばかりしている気がするが、やはりそのくらい個人的に熱いテーマだった。
