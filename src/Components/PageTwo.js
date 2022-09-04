import React from "react";
import * as S from "../Style/PageOneStyle";
import '../Style/PageTwoStyle';

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <S.H4>R= It has three form tenses: do, did, done.</S.H4>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
        <S.H4>R= indicates possession.</S.H4>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
        <S.H4>R= The girl is a sad and negative person</S.H4>
        <S.H4>R= without music I feel a deep sadness</S.H4>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
        </S.H2>
        <S.H4>R= Will, is used to refer to the future with certainty and recent decisions, and "going to" is used to refer to the future that had already been planned before.</S.H4>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <S.H4>R= Why? - When? - What? - Where?</S.H4>
        <S.H2>How many types of adverbs are there in English?</S.H2>
        <S.H4>R= There are six types of adverbs and they are: time, mood, place, degree, frequency and subjunctive.</S.H4>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <S.H4>R= She stayed at her grandmother’s house all day..</S.H4>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <S.H4>R= MVEMJSUN, Is used to help children to remember the order of planets</S.H4>
      </S.Box>
    </S.Container>
  );
}
