const Blog = ({ needFullHight }) => {
  return (
    <section className={`${needFullHight && "min-h-100vh"} blog wrapper`}>
      <h2 className="section-title">blog</h2>

      <div className="blog-area">
        <div
          className="blog-image-1 photo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600054716678-01e0a0421ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGVkdWNhdGlvbiUyMEFSQ0FERSUyMFBMQVlUSU1FJTIwRk9SJTIwOTAnUyUyMEtJRFN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
        <div
          className="blog-image-2 photo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbiUyMEFSQ0FERSUyMFBMQVlUSU1FJTIwRk9SJTIwOTAnUyUyMEtJRFN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
        <div
          className="blog-image-3 photo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1527490272553-ba05e1f11ee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGVkdWNhdGlvbiUyMEFSQ0FERSUyMFBMQVlUSU1FJTIwRk9SJTIwOTAnUyUyMEtJRFN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
        <div
          className="blog-image-4 photo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGVkdWNhdGlvbiUyMEFSQ0FERSUyMFBMQVlUSU1FJTIwRk9SJTIwOTAnUyUyMEtJRFN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
        <div
          className="blog-image-5 photo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
        <div
          className="blog-image-6 photo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1505377059067-e285a7bac49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGVkdWNhdGlvbiUyMEFSQ0FERSUyMFBMQVlUSU1FJTIwRk9SJTIwOTAnUyUyMEtJRFN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
        <div
          className="blog-image-7 photo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1562876610-81705ff3fa43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIwfHxlZHVjYXRpb24lMjBBUkNBREUlMjBQTEFZVElNRSUyMEZPUiUyMDkwJ1MlMjBLSURTfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Blog;
