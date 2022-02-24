---
title: 人気YouTube動画の日本語字幕に修正を送った
date: "2022-02-05T01:25:35+09:00"
description:
tags: []
---

https://www.youtube.com/watch?v=uD4izuDMUQA

こちらは私のお気に入りYouTube動画の一つ。

宇宙・サイエンス系の動画だが、全編通してドラマチックで映像の迫力が圧倒的。
現時点で264万再生。世界中から人気を集めていると言えるだろう。

これをふと日本語字幕で見てみたら、誤訳と思われる箇所を見つけたので、修正を送った。
自分には全く利益のない話なのだが、動画がお気に入りすぎるので、他の人にもちゃんとした訳で見てほしいという完全なお節介だ。

私は別にプロの翻訳者とかではないし、翻訳の実績と呼べるものもないのだが、勢いでやってしまった。

## 字幕編集プラットフォームAmara
動画の概要欄を見ると、字幕・翻訳を手伝うためのリンクが書いてあった。
> Help us caption & translate this video!
>
> https://amara.org/v/oIuX/

[amara](https://amara.org/)

今回初めてこのサイトを知ったのだが、コミュニティの有志が各言語の字幕を共同編集するプラットフォームのようだ。

ところが、日本語字幕はここにはなかった…[^1]
YouTube動画についてる日本語字幕はどこから来たの？

[^1]: 存在している言語は→ Completed subtitles (24): Arabic [ar], Catalan [ca], German [de], Greek [el], English [en], Spanish (Latin America) [es-419], Estonian [et], Finnish [fi], French [fr], Hindi [hi], Indonesian [id], Italian [it], Korean [ko], Kurdish [ku], Lithuanian [lt], Polish [pl], Portuguese [pt], Portuguese, Brazilian [pt-br], Romanian [ro], Russian [ru], Swedish [sv], Thai [th], Turkish [tr], Vietnamese [vi]. Incomplete subtitles (16): Bengali [bn], Czech [cs], Spanish [es], Persian [fa], Filipino [fil], Hungarian [hu], Interlingua [ia], Georgian [ka], Khmer [km], Malayalam [ml], Mongolian [mn], Malay [ms], Dutch [nl], Ukrainian [uk], Urdu [ur], Chinese, Simplified [zh-cn]

## 作者にメールで問い合わせ
しょうがないので作者にメールで問い合わせた。

ググって出てきた連絡先[^2]に、日本語字幕に誤訳を見つけたので直したいがどうすればよいか、みたいな内容のメールを送った。

すぐ返事があり、快諾いただけた。
字幕ファイルを送るからそれを編集して送り返してくれ、それをそのままアップロードする、とのこと。

## 字幕ファイル
字幕ファイルはSubrip形式（`.srt`）のテキストファイル。
このフォーマットは初見だったが、中身はシンプル。

[SubRip (Wikipedia)](https://ja.wikipedia.org/wiki/SubRip)

当該箇所をテキストエディタ（VSCode + [Subtitles Editor](https://marketplace.visualstudio.com/items?itemName=pepri.subtitles-editor)）で編集し、送り返した。

## 反映された
修正版をアップロードした旨の返信をすぐ頂けた。

ただ、この後全編通して見たらまた直したい箇所がたくさん出てきてしまった…
もっとやるかも。

## おまけ：修正内容
9:10~9:30くらいのところ。

### 修正した箇所の原文

> You could imagine living conscious systems which have a very different pace and therefore, can extend out, at least, a lot further than you'd imagine otherwise.

> You could have a living system where if it had a thought every 10 trillion years that would seem normal.

### 元の訳文

> そこで、遠い宇宙には全く異なる速度に基づいた、意識を持つ生命体もあると想像できる。
> そうならば私たちの想像も及ばぬ広い領域を理解する生命体であるかもしれない。

> 生命体が存在すること、
> たとえ10兆年に一度の出来事であるとしても
> 何の不思議もない。

### 修正した訳文

> 全く異なる活動速度を持ち、想像以上に生存期間を長く引き伸ばした、意識を持つ生命を想像できる。

> 10兆年に1回思考するのが普通であるような生命体もあり得るだろう

これは、↓この辺りのことをちょっと知っていると素直に訳せると思う。

[宇宙の終焉 - 有限の宇宙で文明を永続させる方法 (Wikipedia)](https://ja.wikipedia.org/wiki/%E5%AE%87%E5%AE%99%E3%81%AE%E7%B5%82%E7%84%89#.E6.9C.89.E9.99.90.E3.81.AE.E5.AE.87.E5.AE.99.E3.81.A7.E6.96.87.E6.98.8E.E3.82.92.E6.B0.B8.E7.B6.9A.E3.81.95.E3.81.9B.E3.82.8B.E6.96.B9.E6.B3.95)

エントロピーの上昇した宇宙では仕事を取り出すのが困難になるが、
熱源から仕事を取り出す速度を落とす = 思考の速度を落とすことで、主観的には意識（文明）を永遠に存続させられる、という考え方。

動画では前の文脈での表現が違う（生命活動の速度は入手可能なエネルギーの速度に律速される）のだが、やはりこういう考え方があることを知っておくと、
> You could have a living system where if it had a thought every 10 trillion years that would seem normal.

のような突拍子もない内容も自信を持って訳せるのではないか。

また、
> ... and therefore, can extend out ...

のところは解釈しづらいが（extend out what!?）、ネイティブの妻に聞いたところ、ここはちゃんとした英文になっていないからニュアンスを読みっとって訳すしかないとのこと。
話し言葉だからこういうこともあるね。

あと、"living system"を「生命体」と訳すのは当初少し抵抗があった。"life form"とかなら「生命体」にするのだけど、"system"ってもう少し抽象的な言葉にしたいというか。"system"に対しては「系」という日本語があって、「生命系」みたいな訳語もググると見つかるが一般的とは言えない。
ここも妻に相談したら、喋ってる人はそんなこと気にしないで適当にこの言葉にしたのだと思うから、深く考えずに「生命体」でいいんじゃない、とのことだった。なるほど。

その解釈はおかしい、よりよい訳がある、などあれば、ぜひ[Twitter](https://twitter.com/whitphx_ja)にDMするなどしていただけるとありがたいです。

[^2]: https://www.melodysheep.com/contact
