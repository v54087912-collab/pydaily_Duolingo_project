import unittest
from cc_checker_bot.bot import get_simulated_status

class TestBotLogic(unittest.TestCase):
    def test_live_status(self):
        # Even last digit -> Live
        status, msg = get_simulated_status("098") # 8 is even
        self.assertEqual(status, "Live ✅")

        status, msg = get_simulated_status("100") # 0 is even
        self.assertEqual(status, "Live ✅")

    def test_dead_status(self):
        # Odd last digit -> Dead
        status, msg = get_simulated_status("099") # 9 is odd
        self.assertEqual(status, "Dead ❌")

        status, msg = get_simulated_status("123") # 3 is odd
        self.assertEqual(status, "Dead ❌")

    def test_invalid_status(self):
        status, msg = get_simulated_status("abc")
        self.assertEqual(status, "Unknown ❓")

if __name__ == '__main__':
    unittest.main()
