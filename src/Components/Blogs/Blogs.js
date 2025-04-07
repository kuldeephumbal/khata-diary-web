import React from "react";
import { Link } from "react-router-dom";
import { Search, BookMarked, Dot } from "lucide-react";
import blog from "../../images/blog.svg";
import blogOne from "../../images/blogOne.svg";

function Blogs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Blogs</span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="expense-added-notes expense-customer mb-3  ">
              <input type="text" placeholder="Search Customer" />
              <div className="search-added-notes search-customer">
                <Search />
              </div>
            </div>
            <div className="blog-title">
              <h2>Todays Blog</h2>
              <img src={blog} className="img-fluid" alt="" />
            </div>
            <div className="blog-market">
              <p>Stock Market</p>
              <BookMarked size={25} />
            </div>
            <div className="blog-border">
              <div className="blog-content">
                <h3>"Understanding the Basics of Stock Market Investing"</h3>
                <p>
                  Break down the fundamentals of investing in stocks, explaining
                  key concepts like dividends, risk tolerance, and
                  diversification.
                </p>
              </div>
              <div className="blog-date">
                <p className="me-0">30 Nov 2024</p>
                <Dot size={28} />
                <p>3 Min Ago</p>
              </div>
            </div>
            <div>
              <div className="more-blog">
                <h4>More Blog</h4>
                <Link to="">View All</Link>
              </div>
            </div>
            <div className="blog-card-pills">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="blog-one-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#blog-one-home"
                    type="button"
                    role="tab"
                    aria-controls="blog-one-home"
                    aria-selected="true"
                  >
                    <div className="card-container">
                      <img
                        src={blog}
                        alt="Stock Market"
                        className="card-image"
                      />
                      <div className="card-details">
                        <div className="card-heading">
                          <h3>
                            "Understanding the Basics of Stock Market Investing"
                          </h3>
                        </div>
                        <div className="card-meta">
                          <p>30 Nov 2024 • 3 Min Ago</p>
                        </div>
                        <div className="card-engagement">
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <span className="user-count">
                            <p>+5</p>
                          </span>
                        </div>
                        <div className="card-publisher">
                          <p>Read by 24k People</p>
                          <BookMarked size={18} />
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="blog-two-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#blog-two-profile"
                    type="button"
                    role="tab"
                    aria-controls="blog-two-profile"
                    aria-selected="false"
                  >
                    <div className="card-container">
                      <img
                        src={blog}
                        alt="Stock Market"
                        className="card-image"
                      />
                      <div className="card-details">
                        <div className="card-heading">
                          <h3>
                            "Understanding the Basics of Stock Market Investing"
                          </h3>
                        </div>
                        <div className="card-meta">
                          <p>30 Nov 2024 • 3 Min Ago</p>
                        </div>
                        <div className="card-engagement">
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <span className="user-count">
                            <p>+5</p>
                          </span>
                        </div>
                        <div className="card-publisher">
                          <p>Read by 24k People</p>
                          <BookMarked size={18} />
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="blog-three-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#blog-three-contact"
                    type="button"
                    role="tab"
                    aria-controls="blog-three-contact"
                    aria-selected="false"
                  >
                    <div className="card-container">
                      <img
                        src={blog}
                        alt="Stock Market"
                        className="card-image"
                      />
                      <div className="card-details">
                        <div className="card-heading">
                          <h3>
                            "Understanding the Basics of Stock Market Investing"
                          </h3>
                        </div>
                        <div className="card-meta">
                          <p>30 Nov 2024 • 3 Min Ago</p>
                        </div>
                        <div className="card-engagement">
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <img
                            src={blogOne}
                            alt="Avatar"
                            className="user-avatar"
                          />
                          <span className="user-count">
                            <p>+5</p>
                          </span>
                        </div>
                        <div className="card-publisher">
                          <p>Read by 24k People</p>
                          <BookMarked size={18} />
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="blog-one-home"
                role="tabpanel"
                aria-labelledby="blog-one-home-tab"
                tabindex="0"
              >
                <div>
                  <div className="blog-title">
                    <img src={blog} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <div className="blog-market">
                      <p>Stock Market</p>
                    </div>
                    <div className="blog-content">
                      <h3>
                        "Understanding the Basics of Stock Market Investing"
                      </h3>
                    </div>
                    <div className="blog-date">
                      <p className="me-0">30 Nov 2024</p>
                      <Dot size={28} />
                      <p>3 Min Ago</p>
                    </div>
                    <div className="blog-Investing">
                      <p>Lorem Ipsum Dolor Sit Amet</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a
                        odio. Nullam varius, turpis et commodo pharetra, est
                        eros bibendum elit, nec luctus magna felis sollicitudin
                        mauris. Integer in mauris eu nibh euismod gravida. Duis
                        ac tellus et risus vulputate vehicula.
                      </p>
                      <p>
                        Donec lobortis risus a elit. Etiam tempor. Ut
                        ullamcorper, ligula eu tempor congue, eros est euismod
                        turpis, id tincidunt sapien risus a quam. Maecenas
                        fermentum consequat mi. Donec fermentum. Pellentesque
                        malesuada nulla a mi. Duis sapien sem, aliquet nec,
                        commodo eget, consequat quis, neque. Aliquam faucibus,
                        elit ut dictum aliquet, felis nisl adipiscing sapien,
                        sed malesuada diam lacus eget erat. Cras mollis
                        scelerisque nunc. Nullam arcu. Aliquam consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="blog-two-profile"
                role="tabpanel"
                aria-labelledby="blog-two-profile-tab"
                tabindex="0"
              >
                <div>
                  <div className="blog-title">
                    <img src={blog} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <div className="blog-market">
                      <p>Stock Market</p>
                    </div>
                    <div className="blog-content">
                      <h3>
                        "Understanding the Basics of Stock Market Investing"
                      </h3>
                    </div>
                    <div className="blog-date">
                      <p className="me-0">30 Nov 2024</p>
                      <Dot size={28} />
                      <p>3 Min Ago</p>
                    </div>
                    <div className="blog-Investing">
                      <p>Lorem Ipsum Dolor Sit Amet</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a
                        odio. Nullam varius, turpis et commodo pharetra, est
                        eros bibendum elit, nec luctus magna felis sollicitudin
                        mauris. Integer in mauris eu nibh euismod gravida. Duis
                        ac tellus et risus vulputate vehicula.
                      </p>
                      <p>
                        Donec lobortis risus a elit. Etiam tempor. Ut
                        ullamcorper, ligula eu tempor congue, eros est euismod
                        turpis, id tincidunt sapien risus a quam. Maecenas
                        fermentum consequat mi. Donec fermentum. Pellentesque
                        malesuada nulla a mi. Duis sapien sem, aliquet nec,
                        commodo eget, consequat quis, neque. Aliquam faucibus,
                        elit ut dictum aliquet, felis nisl adipiscing sapien,
                        sed malesuada diam lacus eget erat. Cras mollis
                        scelerisque nunc. Nullam arcu. Aliquam consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="blog-three-contact"
                role="tabpanel"
                aria-labelledby="blog-three-contact-tab"
                tabindex="0"
              >
                <div>
                  <div className="blog-title">
                    <img src={blog} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <div className="blog-market">
                      <p>Stock Market</p>
                    </div>
                    <div className="blog-content">
                      <h3>
                        "Understanding the Basics of Stock Market Investing"
                      </h3>
                    </div>
                    <div className="blog-date">
                      <p className="me-0">30 Nov 2024</p>
                      <Dot size={28} />
                      <p>3 Min Ago</p>
                    </div>
                    <div className="blog-Investing">
                      <p>Lorem Ipsum Dolor Sit Amet</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a
                        odio. Nullam varius, turpis et commodo pharetra, est
                        eros bibendum elit, nec luctus magna felis sollicitudin
                        mauris. Integer in mauris eu nibh euismod gravida. Duis
                        ac tellus et risus vulputate vehicula.
                      </p>
                      <p>
                        Donec lobortis risus a elit. Etiam tempor. Ut
                        ullamcorper, ligula eu tempor congue, eros est euismod
                        turpis, id tincidunt sapien risus a quam. Maecenas
                        fermentum consequat mi. Donec fermentum. Pellentesque
                        malesuada nulla a mi. Duis sapien sem, aliquet nec,
                        commodo eget, consequat quis, neque. Aliquam faucibus,
                        elit ut dictum aliquet, felis nisl adipiscing sapien,
                        sed malesuada diam lacus eget erat. Cras mollis
                        scelerisque nunc. Nullam arcu. Aliquam consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
