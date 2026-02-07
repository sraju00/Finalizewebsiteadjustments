import fourLensImage from 'figma:asset/630a6223e1ef15211c8379dedfa27d9ac8dc2127.png';

export function FourLensAnalysis() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The 4-Lens Analysis Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't guess why a home didn't sell. We examine it through four distinct market lenses — each designed to reveal a specific failure point and its fix.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <img 
            src={fourLensImage} 
            alt="The 4-Lens Analysis Process" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Analysis Summary */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every relaunch decision is made only after all four lenses agree.<br />
            That's how we avoid random price cuts and instead arrive at a clear pricing range, one high-impact fix, and the right moment to relaunch.
          </p>
        </div>
      </div>
    </section>
  );
}