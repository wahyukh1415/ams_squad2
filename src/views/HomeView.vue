<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/registerlogin'); // Ganti '/login' dengan rute yang sesuai
    }
  }
}
</script>

<template>
    <div>
    <header>
        <div class="logo">
            <img src="../assets/images/ACVLogoGradient.png" alt="Auctions Logo">
        </div>
        <nav>
            <ul>
                <li><a href="#">For Buyers</a></li>
                <li><a href="#">For Sellers</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Updates</a></li>
                <li><a href="#">Company</a></li>
            </ul>
        </nav>
        <div class="auth-buttons">
            <button class="login" @click="goToLogin">Login</button>
            <button class="get-started">Get Started</button>
        </div>
    </header>
    <main>
        <div class="hero-section">
            <h1>THE LEADING ONLINE CAR AUCTION <span>FOR DEALERS</span></h1>
            <p>Don't miss out on the inventory you need.</p>
            <div class="buyer-buttons">
                <button class="bcm-button">Become a Buyer</button>
                <button class="exp-button">Explore Buyer Features</button>
            </div>
        </div>
        <div class="auction-card">
            <div class="auction-info">
                <p>48 <span class="info-light">Bids</span></p>
                <p>175 <span class="info-light">Views</span></p>
            </div>
            <img src="@/assets/images/rcar.jpg" alt="Car for auction">
            <div class="bid-section">
                <button class="bid-button">BID</button>
                <div class="divider">
                </div>
                    <div class="timer">
                        <span class="time-text">TIME REMAINING</span>
                        <span class="time">00:05</span>
                    </div>
            </div>
        </div>
    </main>
    <div class="section-2">
        <section class="auction-info-section">
        <h2>AUCTION</h2>
        <p>The nation's leading wholesale automotive auction marketplace for buyers and sellers.</p>
      </section>
      <section class="features-section">
        <div class="feature">
          <h3>Buy</h3>
          <p>Source vehicles nationwide confidently with trust and transparency, backed by the best condition report on the market.</p>
          <button>Become a Buyer</button>
        </div>
        <div class="feature">
          <h3>Sell</h3>
          <p>Access dealers nationwide who are looking for exactly what you're selling with options to maximize profit and reduce turn time.</p>
          <button>Become a Seller</button>
        </div>
        <div class="feature">
          <h3>Value</h3>
          <p>Get the most up-to-date wholesale pricing in the market, backed by real-time data to help you put your best price forward.</p>
          <button>Market Report</button>
        </div>
      </section>
    </div>
    </div>
</template>
