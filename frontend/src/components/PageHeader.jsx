function PageHeader({ title, subtitle }) {

  return (

    <div className="mb-10">

      <h1 className="text-5xl font-bold text-white mb-3">
        {title}
      </h1>

      <p className="text-gray-400 text-lg">
        {subtitle}
      </p>

    </div>

  );
}

export default PageHeader;