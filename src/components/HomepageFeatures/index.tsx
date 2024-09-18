import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Flexibility and Control',
    Svg: require('@site/static/img/developer-layers.svg').default,
    description: (
      <>
        HedHog's robust headless API and intuitive admin panel enable efficient
        management of data and functionalities, offering flexibility for
        platform integration and system customization while maintaining control
        and ease of use.
      </>
    ),
  },
  {
    title: 'Focus on Business',
    Svg: require('@site/static/img/business-vision.svg').default,
    description: (
      <>
        Designed to help companies focus on what truly matters, the framework
        reduces coding complexity, simplifying development. This enables teams
        to concentrate their efforts on business strategies and growth without
        getting lost in technical details.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open-source.svg').default,
    description: (
      <>
        As a fully Open Source framework, it allows anyone to access, modify,
        and contribute to its ongoing development. This promotes innovation,
        builds a strong community, and ensures continuous evolution based on
        real user needs.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
