import React from "react";
import * as S from "../Style/PageOneStyle";
import '../Style/PageOneStyle';

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <S.H4>R= It means Hypertext Transfer Protocol Secure</S.H4>
        <S.H2>Stateless is...?</S.H2>
        <S.H4>R= when it is not necessary to maintain the state of the values.</S.H4>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <S.H4>R= They are used to indicate/replace the proper names or the nouns, and they are used at the beginning of a sentence and before the verb.</S.H4>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <S.H4>R= auxiliary verbs.</S.H4>
        <S.H2>What Should means?</S.H2>
        <S.H4>R= Should means when you ask or give advices and suggestions.</S.H4>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <S.H4>R= We're going to talk great things about you!</S.H4>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <S.H4>R= He's going to Bahia next month</S.H4>
          <li>3 - Ela estará ai amanhã</li>
          <S.H4>R= She'll be there tomorrow.</S.H4>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
        <S.H4>R= They</S.H4>

        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <S.H4>R= 	I was </S.H4>
        <S.H4>R= 	You were </S.H4>
        <S.H4>R= 	He/She/It was </S.H4>
        <S.H4>R= 	We were </S.H4>
        <S.H4>R= 	you were </S.H4>
        <S.H4>R= 	they were </S.H4>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
        <S.H4>R= These computers are very slow</S.H4>
        <S.H4>R= those dogs never be quiet!</S.H4>
        
      </S.Box>
    </S.Container>
  );
}
