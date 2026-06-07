import FadeContent from '../reactbits/FadeContent';
import GlassSurface from '../reactbits/GlassSurface';
import TiltedCard from '../reactbits/TiltedCard';
import { mockups } from '../../data/projects';

const tiltProps = {
  containerWidth: '100%',
  containerHeight: 'auto',
  imageWidth: '100%',
  imageHeight: 'auto',
  scaleOnHover: 1.04,
  rotateAmplitude: 14,
  showMobileWarning: false,
};

function MockupPreview({ mockup }) {
  if (mockup.image) {
    return (
      <img
        src={mockup.image}
        alt={mockup.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
        draggable={false}
      />
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', background: mockup.gradient, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 12px', background: 'rgba(0,0,0,0.35)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
        <div style={{ flex: 1, marginLeft: 8, height: 20, borderRadius: 6, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>
            {mockup.url}
          </span>
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.28)' }} />
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', marginBottom: 8 }}>
            {mockup.category}
          </p>
          <p style={{ fontSize: 22, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>{mockup.title}</p>
        </div>
      </div>
    </div>
  );
}

function MockupCard({ mockup, t, lang, index }) {
  return (
    <FadeContent blur delay={index * 0.1} yOffset={30}>
      <TiltedCard {...tiltProps} captionText={mockup.title}>
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={16}
          borderWidth={0.095}
          brightness={32}
          opacity={0.93}
          blur={32}
          backgroundOpacity={0.24}
          saturation={1.8}
          distortionScale={-240}
          className="glass-surface--minimal"
        >
          <div style={{ width: '100%' }}>
            <div style={{ overflow: 'hidden', borderRadius: '16px 16px 0 0', height: 200 }}>
              <MockupPreview mockup={mockup} />
            </div>

            <div style={{ padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: 16 }}>{mockup.title}</h3>
                <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: 20, fontWeight: 500 }}>
                  {t.mockups.badge}
                </span>
              </div>

              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {lang === 'pt' ? mockup.category : (mockup.categoryEn || mockup.category)}
              </p>

              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
                {lang === 'pt' ? mockup.description : (mockup.descriptionEn || mockup.description)}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {mockup.tech.map(tech => (
                  <span key={tech} style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', padding: '3px 10px', borderRadius: 20 }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                {mockup.demo ? (
                  <a
                    href={mockup.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, fontWeight: 500, padding: '8px 16px', background: '#5227FF', color: 'white', borderRadius: 8, textDecoration: 'none', transition: 'all 0.3s' }}
                  >
                    {t.mockups.viewConcept}
                  </a>
                ) : (
                  <span style={{ fontSize: 12, fontWeight: 500, padding: '8px 16px', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)', borderRadius: 8 }}>
                    {t.mockups.comingSoon}
                  </span>
                )}
              </div>
            </div>
          </div>
        </GlassSurface>
      </TiltedCard>
    </FadeContent>
  );
}

export default function Mockups({ t, lang }) {
  return (
    <section id="mockups" style={{ padding: '0 24px 128px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto' }}>
        <FadeContent blur>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: 16, letterSpacing: '-0.02em' }}>
              {t.mockups.title}
              <span style={{ color: '#5227FF' }}>.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.6, maxWidth: 560, margin: '0 auto' }}>
              {t.mockups.subtitle}
            </p>
          </div>
        </FadeContent>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {mockups.map((mockup, index) => (
            <MockupCard key={mockup.title} mockup={mockup} t={t} lang={lang} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
