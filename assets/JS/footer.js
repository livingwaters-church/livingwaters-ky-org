document.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById("global-footer");
    if (!footer) return;

    footer.innerHTML = `
        <footer class="global-footer">
            <div class="footer-grid">

                <div class="footer-col">
                    <h4>Living Waters</h4>
                    <p>Serving God, Loving People, Changing Lives.</p>
                </div>

                <div class="footer-col">
                    <h4>Gathering Times</h4>
                    <p>Sunday School: 9:00 AM</p>
                    <p>Sunday Worship: 10:30 AM</p>
                    <p>Tuesday Bible Study: 5:00 PM</p>
                </div>

                <div class="footer-col">
                    <h4>Mailing Address</h4>
                    <p>
                        285 Hugh Hunter Rd.<br>
                        PO Box 1125<br>
                        Oak Grove, KY 42262
                    </p>
                    <p style="margin-top: 6px;">
                        📞 <a href="tel:2706406100" style="color: inherit; text-decoration: none;">(270) 640-6100</a><br>
                        ✉️ <a href="mailto:info@livingwaters-ky.org" style="color: inherit; text-decoration: none;">info@livingwaters-ky.org</a>
                    </p>
                </div>

            </div>

            <!-- Bottom Bar: Copyright and Inline Social Links -->
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Living Waters Community Church. All rights reserved.</p>
                <div class="footer-social-links">
                    <a href="https://www.facebook.com/share/19EPaesQRj/" target="_blank" title="Facebook" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="YOUR_INSTAGRAM_URL" target="_blank" title="Instagram" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@LivingWatersCommunityChurch" target="_blank" title="YouTube" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    `;

});
