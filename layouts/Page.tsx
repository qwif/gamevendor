import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Icon } from 'components/Icon'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

interface PageProps {
  title: string
  children: React.ReactNode
}

export const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title} – gameVendor</title>
      </Head>
      <Header />
      <div className="page__breadcrumbs breadcrumbs container">
        <Link href="/">
          <a className="breadcrumbs__link">Home</a>
        </Link>
        <div className="breadcrumbs__icon">
          <Icon name="arrow-right" />
        </div>
        <Link href="/">
          <a className="breadcrumbs__link">Discover</a>
        </Link>
        <div className="breadcrumbs__icon">
          <Icon name="arrow-right" />
        </div>
        <a className="breadcrumbs__link breadcrumbs__link--inactive">{title}</a>
      </div>
      <h2 className="page__title container">{title}</h2>
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
