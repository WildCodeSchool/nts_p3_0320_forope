import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import Form from './Formulaire';
import AllArticles from './AllArticles';
import Footer from './Footer';
import Content from './Content';
import Titles from './Titles';
import Context from './Context';

export default function AnswerPage() {
  return (
    <>
      <Navigation />
      <Banner
        title="Forope."
        subtitle="Lorem ipsum dolor sit amet, consecteconsecte- tuer adipiscing elit."
      />
      <Titles text="Contenu" signs="." />
      <Content />
      <Context />
      <Titles align text="Nous contacter" signs="." />
      <Form />
      <Titles text="En +" signs="." />
      <AllArticles />
      <Footer />
    </>
  );
}
