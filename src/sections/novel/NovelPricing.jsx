import SectionHeading from '../../components/SectionHeading.jsx';
import Split from '../../components/Split.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { pricingSteps } from './content.js';

export default function NovelPricing() {
  return (
    <section id="novel-pricing" className="section section--tight" aria-labelledby="novel-pricing-title">
      <div className="container">
        <SectionHeading
          id="novel-pricing-title"
          eyebrow="Pricing"
          title="Cheap to start. Free in the end."
          lead="Early readers get the best deal, and a sales limit can turn a story free for everyone."
        />

        <ol className="novel-pricing">
          {pricingSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="novel-pricing__step">
              <span className="novel-pricing__icon">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <div className="novel-pricing__gauge">
          <Split
            reverse
            media={<MediaSlot slot="novelPricingGauge" frame="book" label="The sales-limit gauge" ratio="16 / 10" />}
          >
            <h3>
              <Icon name="gauge" size={26} /> See how close it is to free
            </h3>
            <p>
              Every product shows a gauge counting down to its sales limit, so you can watch a story get closer to
              being free. The time window and the limit are set per product and can change over time.
            </p>
          </Split>
        </div>
      </div>
    </section>
  );
}
