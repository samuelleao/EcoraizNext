import Head from 'next/head'

function HeadSeo(props) {
    return (
        <Head>
            <link rel='apple-touch-icon-precomposed' sizes='57x57' href={require('../images/favicons/apple-touch-icon-57x57.png')} />
            <link rel='apple-touch-icon-precomposed' sizes='114x114' href={require('../images/favicons/apple-touch-icon-114x114.png')} />
            <link rel='apple-touch-icon-precomposed' sizes='72x72' href={require('../images/favicons/apple-touch-icon-72x72.png')} />
            <link rel='apple-touch-icon-precomposed' sizes='144x144' href={require('../images/favicons/apple-touch-icon-144x144.png')} />
            <link rel='apple-touch-icon-precomposed' sizes='60x60' href={require('../images/favicons/apple-touch-icon-60x60.png')} />
            <link rel='apple-touch-icon-precomposed' sizes='120x120' href={require('../images/favicons/apple-touch-icon-120x120.png')} />
            <link rel='apple-touch-icon-precomposed' sizes='76x76' href={require('../images/favicons/apple-touch-icon-76x76.png')} />
            <link rel='apple-touch-icon-precomposed' sizes='152x152' href={require('../images/favicons/apple-touch-icon-152x152.png')} />
            <link rel='icon' type='image/png' href={require('../images/favicons/favicon-196x196.png')} sizes='196x196' />
            <link rel='icon' type='image/png' href={require('../images/favicons/favicon-96x96.png')} sizes='96x96' />
            <link rel='icon' type='image/png' href={require('../images/favicons/favicon-32x32.png')} sizes='32x32' />
            <link rel='icon' type='image/png' href={require('../images/favicons/favicon-16x16.png')} sizes='16x16' />
            <link rel='icon' type='image/png' href={require('../images/favicons/favicon-128.png')} sizes='128x128' />
            <meta name='application-name' content='&nbsp;' />
            <meta name='msapplication-TileColor' content='#006ECB' />
            <meta name='msapplication-TileImage' content='mstile-144x144.png' />
            <meta name='msapplication-square70x70logo' content='mstile-70x70.png' />
            <meta name='msapplication-square150x150logo' content='mstile-150x150.png' />
            <meta name='msapplication-wide310x150logo' content='mstile-310x150.png' />
            <meta name='msapplication-square310x310logo' content='mstile-310x310.png' />
            <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />

            <meta name='description' content='Empresa especializada na comercialização e consultoria no segmento de planos de saúde no Rio Grande do Norte e Pernambuco.' />
            <meta name='keywords' content='corretora,compare,saúde,planos,odonto,ans,natal,recife,PE,RN,amil,unimed,bradesco,hapvida' />
            <meta name='audience' content='All' />
            <meta name='URL' content='' />
            <meta name='rating' content='General' />
            <meta name='objectType' content='Document' />
            <meta name='googlebot' content='index, follow' />
            <meta name='robots' content='index, follow,all' />
            <meta name='revisit-after' content='7 Days' />
            <meta name='revisit' content='7 days' />
            <meta name='classification' CONTENT='Engenharia' />
            <meta name='resource-type' CONTENT='document' />
            <meta name='robots' CONTENT='index  follow' />
            <meta content='global' name='distribution' />
            <meta name='distribution' content='global' />
            <meta name='Googlebot' content='all' />
            <meta name='robots' content='index follow' />
            <meta name='author' content='Vibecriativa Marketing Digital https://www.vibecriativa.com.br' />
            <meta name='UIDesign' content='Samuel Leão - samueldasilva460@gmail.com' />
            <meta name='copyright' content='' />
            <meta name='base_url' content='' />
            <meta name='language' content='pt-br' />
            <meta name='country' content='BRA' />
            <meta http-equiv='x-dns-prefetch-control' content='on' />
            <meta property='og:locale' content='pt_BR' />
            <meta property='og:url' content='' />
            <meta property='og:site_name' content='' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <title>{props.title}</title>
        </Head>
    );
}

export default HeadSeo