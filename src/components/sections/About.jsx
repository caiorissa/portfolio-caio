import FadeContent from '../reactbits/FadeContent';
import Counter from '../reactbits/Counter';
import GlassSurface from '../reactbits/GlassSurface';
import SpotlightCard from '../ui/SpotlightCard';

const statGlassProps = {
  width: '100%',
  height: 'auto',
  borderRadius: 16,
  borderWidth: 0.09,
  brightness: 32,
  opacity: 0.92,
  blur: 30,
  backgroundOpacity: 0.22,
  saturation: 1.85,
  distortionScale: -232,
};

export default function About({ t }) {
  return (
    <section id="about" style={{ padding: '128px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <FadeContent blur>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: 48, textAlign: 'center', letterSpacing: '-0.02em' }}>
            {t.about.title}
            <span style={{ color: '#5227FF' }}>.</span>
          </h2>
        </FadeContent>

        <FadeContent blur delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
            <SpotlightCard glowColor="purple">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={20}
                borderWidth={0.1}
                brightness={38}
                opacity={0.95}
                blur={34}
                backgroundOpacity={0.26}
                saturation={1.9}
                distortionScale={-248}
                className="glass-surface--minimal"
              >
                <div style={{ padding: 24, textAlign: 'center' }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.7 }}>
                    {t.about.text}
                  </p>
                </div>
              </GlassSurface>
            </SpotlightCard>
          </div>
        </FadeContent>

        <FadeContent blur delay={0.4}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 600, margin: '0 auto' }}>
            <SpotlightCard glowColor="purple">
              <GlassSurface {...statGlassProps} className="glass-surface--minimal">
                <div style={{ padding: '24px 16px', textAlign: 'center', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
                    <Counter value={7} fontSize={32} textColor="#5227FF" fontWeight="bold" />
                    <span style={{ color: '#5227FF', fontSize: 24, fontWeight: 700 }}>+</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 8 }}>{t.stats.projects}</p>
                </div>
              </GlassSurface>
            </SpotlightCard>

            <SpotlightCard glowColor="purple">
              <GlassSurface {...statGlassProps} className="glass-surface--minimal">
                <div style={{ padding: '24px 16px', textAlign: 'center', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
                    <Counter value={3} fontSize={32} textColor="#5227FF" fontWeight="bold" />
                    <span style={{ color: '#5227FF', fontSize: 24, fontWeight: 700 }}>+</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 8 }}>{t.stats.clients}</p>
                </div>
              </GlassSurface>
            </SpotlightCard>

            <SpotlightCard glowColor="purple">
              <GlassSurface {...statGlassProps} className="glass-surface--minimal">
                <div style={{ padding: '24px 16px', textAlign: 'center', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', minHeight: 42 }}>
                    <span style={{ color: '#5227FF', fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                      2024
                    </span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 8, fontFamily: 'inherit' }}>{t.stats.year}</p>
                </div>
              </GlassSurface>
            </SpotlightCard>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
