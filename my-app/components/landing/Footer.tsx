const footerLinks = {
  Products: ["Portfolio Tracker", "Auto-Invest", "Tax Tools", "Analytics", "API"],
  Company: ["About Us", "Careers", "Press", "Blog", "Contact"],
  Resources: ["Help Center", "Documentation", "Webinars", "Community", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy">
                <span className="text-sm font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-xl font-bold text-foreground">WealthFlow</span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Smarter investing for everyone. Grow, manage, and protect your wealth with confidence.
            </p>
            <div className="flex gap-4">
              {["X", "Li", "Fb", "Ig"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} WealthFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
